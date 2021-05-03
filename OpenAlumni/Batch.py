from asyncio import sleep
from os import remove, scandir, unlink
from urllib import parse
from urllib.parse import urlparse

#import numpy as np
from django.utils.datetime_safe import datetime
from imdb import IMDb
from wikipedia import wikipedia, re

from OpenAlumni.Tools import log, translate, load_page, clear_directory
from OpenAlumni.settings import MOVIE_CATEGORIES, MOVIE_NATURE, DELAY_TO_AUTOSEARCH
from alumni.models import Profil, Work, PieceOfWork

#from scipy import pdist

ia=IMDb()


def extract_profil_from_cnca(title):
    """
    Extraction sur la base http://www.cnc-rca.fr/Pages/PageAccueil.aspx
    :param firstname:
    :param lastname:
    :return:
    """
    page = wikipedia.BeautifulSoup(wikipedia.requests.get("http://www.cnc-rca.fr/Pages/Page.aspx?view=RecOeuvre",
                                                          headers={'User-Agent': 'Mozilla/5.0'}).text, "html5lib")
    return title




def extract_film_from_unifrance(url:str,job_for=None):
    rc=dict()
    if not url.startswith("http"):
        log("On passe par la page de recherche pour retrouver le titre")
        page=load_page("https://unifrance.org/recherche?q="+parse.quote(url))
        _link=page.find("a",attrs={'href': wikipedia.re.compile("^https://www.unifrance.org/film/[0-9][0-9]")})
        if _link is None:return rc

        url=_link.get("href")

    #r=wikipedia.requests.get(url, headers={'User-Agent': 'Mozilla/5.0',"accept-encoding": "gzip, deflate"})
    #page = wikipedia.BeautifulSoup(str(r.content,encoding="utf-8"),"html5lib")
    page=load_page(url)
    _title=page.find('h1', attrs={'itemprop': "name"})
    if not _title is None:
        rc["title"]=_title.text
        log("Analyse du film "+rc["title"])

    for title in page.findAll('h1'):
        if "Affiches" in title.text:
            section=title.parent
            _img=section.find("img",attrs={'itemprop': "image"})
            if not _img is None:
                src:str=_img.get("src")
                if not src.startswith("/ressource"):
                    rc["visual"]=src
                    log("Enregistrement de l'affiche "+src)

    _real=page.find("div",attrs={"itemprop":"director"})
    if not _real is None:
        rc["real"]=_real.find("a",attrs={"itemprop":"name"}).get("href")

    idx_div=0
    for div in page.findAll("div",attrs={'class': "details_bloc"}):
        if idx_div==0:
            if not ":" in div.text:rc["nature"]=div.text

        if "Année de production : " in div.text:
            rc["year"]=div.text.replace("Année de production : ","")
        if "Genre(s) : " in div.text:
            rc["category"]=translate(div.text.replace("Genre(s) : ",""))
        idx_div=idx_div+1

    if "category" in rc and len(rc["category"])==0:rc["category"]="inconnue"


    if not job_for is None:
        if rc["real"]==job_for:
            rc["job"]="Réalisation"
        else:
            section=page.find("section",{"id":"casting"})

            if not section is None:
                jobs = section.findAll("h2")
                paras = section.findAll("p")
                #if not "personne" in links[0].href:links.remove(0)
                for idx in range(len(paras)):
                    links=paras[idx].findAll("a")
                    for l in links:
                        if "/personne" in l.get("href"):
                            if l.get("href")==job_for:
                                rc["job"]=jobs[idx].text.replace(" : ","")
                                break

    if not "job" in rc:
        pass




    _synopsis = page.find("div", attrs={"itemprop": "description"})
    if not _synopsis is None:rc["synopsis"]=_synopsis.getText(strip=True)

    return rc


def extract_profil_from_bellefaye(firstname,lastname):
    page = wikipedia.BeautifulSoup(wikipedia.requests.post(
        "https://www.bellefaye.com/fr/login_check",
        data="_csrf_token=c8FvlHO5q-f0XpbhG2lQJifHlmhei_qpGO3WcaLgPqE&_username=h.hoareau%40femis.fr&_password=Femis2021&_submit=",
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
            'Accept': 'text/html', 'Content-Type': 'application/x-www-form-urlencoded'
        }
    ).text, "html5lib")

    url="https://www.bellefaye.com/fr/search"
    data="name=%name%&firstName=%firstname%&searchCity=&searchZipCode=&searchEmail=&searchGender=&findPerson=&searchName=&searchCity2=&searchZipCode2=&searchEmail2="
    data=data.replace("%name%",lastname).replace("%firstname%",firstname)
    page = wikipedia.BeautifulSoup(wikipedia.requests.post(
        url,
        data=data,
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
            'Accept':'text/html','Content-Type':'application/x-www-form-urlencoded'
        }
    ).text, "html5lib")
    print(page.text)
    pass



def extract_actor_from_unifrance(name="céline sciamma"):
    page=load_page("https://www.unifrance.org/recherche/personne?q=$query&sort=pertinence".replace("$query",parse.quote(name)))
    links=page.findAll('a', attrs={'href': wikipedia.re.compile("^https://www.unifrance.org/annuaires/personne/")})

    rc=list()
    if len(links)>0:
        u=links[0].get("href")
        page=wikipedia.BeautifulSoup(wikipedia.requests.get(u, headers={'User-Agent': 'Mozilla/5.0'}).text,"html5lib")

        photo = ""
        _photo = page.find('div', attrs={'class': "profil-picture pull-right"})
        if not _photo is None: photo = _photo.find("a").get("href")

        links_film=page.findAll('a', attrs={'href': wikipedia.re.compile("^https://www.unifrance.org/film/[0-9][0-9]*/")})
        for l in links_film:
            rc.append({"url":l.get("href"),"text":l.get("text")})
    else:
        return None

    return {"links":rc,"photo":photo,"url":u}



def extract_profil_from_imdb(lastname:str, firstname:str):
    peoples=ia.search_person(firstname+" "+lastname)
    infos=dict()
    for p in peoples:
        name=p.data["name"].upper()
        if firstname.upper() in name and lastname.upper() in name:
            if not "nopicture" in p.data["headshot"]:
                infos["photo"]=p.data["headshot"]
            if not "url" in infos:
                infos["url"]="https://imdb.com/name/nm"+p.personID+"/"
                log("Ouverture de " + infos["url"])
                page=load_page(infos["url"])
                film_zone=page.find("div",{"id":"filmography"})
                if film_zone is None:film_zone=page

                links = film_zone.findAll('a', attrs={'href': wikipedia.re.compile("^/title/tt")})
                infos["links"]=[]
                for l in links:
                    if len(l.getText())>3 and l.parent.parent.parent.parent and l.parent.parent.parent.parent["id"]=="filmography":
                        texts=l.parent.parent.text.split("(")
                        nature="long"
                        job:str=l.parent.parent.get("id").split("-")[0]
                        if job=="miscellaneous" or len(job)==0:
                            temp=l.parent.parent.text.split("(")
                            job=temp[len(temp)-1].split(")")[0]
                            pass

                        url = "https://www.imdb.com" + l.get("href")
                        url = url.split("?")[0]

                        if len(texts)>1:
                            nature = ""
                            for nat in MOVIE_NATURE:
                                if nat.lower() in texts[1].lower():
                                    nature=nat
                                    break
                            if nature=="":
                                log("Nature inconnue depuis "+texts[1]+" pour "+url)

                            if len(texts)>2 and len(job)==0:
                                job=texts[2].split(")")[0]

                        infos["links"].append({"url":url,"text":l.getText(),"job":job,"nature":nature})


    return infos



#http://localhost:8000/api/batch
def extract_film_from_imdb(url:str,title:str,name="",job="",):
    """

    :return:
    """
    page=load_page(url)

    rc = dict({"title": title,"nature":translate("film")})

    zone_info=page.find("div",{"class":"title_block"})
    if title.startswith("Episode") or "Episode" in zone_info.getText():
        section_title = page.find("div", {"class": "titleParent"})
        if not section_title is None: title = section_title.find("a").text + " " + title
        #Recherche de l'épisode
        rc["nature"]=MOVIE_NATURE[0]
        zone_info_comp=page.find("div",{"class":"button_panel navigation_panel"})
        if not zone_info_comp is None and "Season" in zone_info_comp.getText():
            extract_text="S"+zone_info_comp.getText().split("Season")[1].replace("Episode ","E").replace(" | ","").replace(" ","")
            rc["title"]=title+" "+extract_text.split("\n")[0]


    for cat in MOVIE_CATEGORIES:
        if cat.lower() in zone_info.getText().lower():
            rc["category"]=cat
    if not "category" in rc:
        rc["category"]="Inconnue"
        log("Pas de categorie pour "+url)

    affiche = page.find("div", attrs={"class": "poster"})
    if not affiche is None and not affiche.find("img") is None: rc["visual"] = affiche.find("img").get("src")

    try:
        rc["year"]=re.search('[1-2][0-9][0-9][0-9]', page.title.text).group(0)
    except:
        try:
            rc["year"] = re.search('[1-2][0-9][0-9][0-9]', zone_info.getText()).group(0)
        except:
            pass


    summary_section=page.find("div",attrs={"class":"summary_text"})
    if not summary_section is None and not "Add a Plot" in summary_section.text:
        rc["synopsis"]=summary_section.text.replace("\n","").strip()

    log("Recherche du role sur le film")

    credits=load_page(url+"fullcredits")
    if not credits is None:
        credits=credits.find("div",{"id":"main"})
        if not credits is None:
            links=credits.find_all("a")
            for l in links:
                if name.upper() in l.text.upper():
                    parent=l.parent.parent.find("td",{"class":"credit"})
                    if not parent is None:
                        rc["job"]=str(parent.getText().replace("\n","")).strip()
                        rc["job"]=rc["job"].split("(")[0]
                        while "  " in rc["job"]:
                            rc["job"]=rc["job"].replace("  "," ")

                    break

    if not "job" in rc: rc["job"]=job

    return rc




def extract_actor_from_wikipedia(lastname,firstname):
    wikipedia.set_lang("fr")

    searchs=wikipedia.search(lastname+" "+firstname)

    for search in searchs:
        page=wikipedia.page(search)
        rc = {"links": list({"title": "wikipedia", "url": page.url})}

        if lastname in page.title and firstname in page.title:
            rc = dict({"links": [], "name": firstname+" "+lastname})
            for img in page.images:
                if img.endswith(".jpg"):rc["photo"]=img

            save_domains=["unifrance.org","www.lefilmfrancais","www.allocine.fr","catalogue.bnf.fr","www.allmovie.com"]
            libs = ["UniFrance", "Le Film Francais", "Allocine", "La BNF", "All movie"]
            try:
                for ref in page.references:
                    domain=urlparse(ref).netloc
                    try:
                        idx = save_domains.index(domain)
                        rc["links"].append({
                            "title":libs[idx],
                            "url":ref
                        })
                    except:
                        pass
            except:
                pass

            html:wikipedia.BeautifulSoup= wikipedia.BeautifulSoup(page.html(),"html5lib")
            #Recherche de la section des films
            # for link in html.findAll('a', attrs={'href': wikipedia.re.compile("^http://")}):
            #     if "film" in link.text:
            #         pass


            rc["summary"]=page.summary
            rc["title"]=page.title
            rc["url"]=page.url

            return rc

    return None



def add_pows_to_profil(profil,links,all_links,job_for):
    """
    Ajoute des oeuvres au profil
    :param profil:
    :param links:
    :param all_links:
    :return:
    """
    for l in links:
        source = "auto"
        pow = None
        for p in PieceOfWork.objects.filter(title__iexact=l["text"]):
            for link in p.links:
                if l["url"] == link["url"]:
                    pow=p
                    break

        if not pow:
            if "unifrance" in l["url"]:
                film = extract_film_from_unifrance(l["url"], job_for=job_for)
                source = "auto:unifrance"

            if "imdb" in l["url"]:
                film = extract_film_from_imdb(l["url"], l["text"], name=profil.firstname + " " + profil.lastname,job=l["job"])
                if not "nature" in film: film["nature"] = l["nature"]
                source = "auto:IMDB"

            log("Traitement de " + film["title"] + " à l'adresse " + l["url"])

            pow = PieceOfWork(title=film["title"])
            pow.add_link(url=l["url"], title=source)
            if "nature" in film:
                pow.nature=translate(film["nature"])
            else:
                pow.nature="Film"

            if "synopsis" in film: pow.description = film["synopsis"]
            if "visual" in film: pow.visual = film["visual"]
            if "category" in film: pow.category = translate(film["category"])
            if "year" in film: pow.year = film["year"]

            try:
                result=PieceOfWork.objects.filter(title__iexact=pow.title)
                if len(result)>0:
                    log("Le film existe déjà dans la base, on le récupére")
                    pow=result.first()
                    pow.add_link(l["url"],source)
                pow.save()

                # TODO: a réétudier car des mises a jour de fiche pourrait nous faire rater des films
                # il faudrait désindenter le code ci-dessous mais du coup il faudrait retrouver le pow
                job = profil.job
                if "job" in film: job = film["job"]

            except Exception as inst:
                log("Impossible d'enregistrer le film: "+str(inst.args))
        else:
            job=l["job"]


        t_job = translate(job)
        if not Work.objects.filter(pow_id=pow.id, profil_id=profil.id,job=t_job).exists():
            log("Ajout de l'experience " + job + " traduit en "+t_job+" sur " + pow.title + " à " + profil.lastname)
            work = Work(pow=pow, profil=profil, job=t_job, source=source)
            work.save()


#http://localhost:8000/api/batch


def exec_batch(profils):

    all_links=list()
    for pow in PieceOfWork.objects.all():
        for l in pow.links:
            all_links.append(l["url"])

    for profil in profils:
        links=[]
        job_for=None

        log("Traitement de " + profil.firstname+" "+profil.lastname)
        transact = Profil.objects.filter(id=profil.id)
        if profil.delay_lastsearch() > DELAY_TO_AUTOSEARCH or len(profils)==1:
            log("Hors délai ==> mise a jour")
            profil.dtLastSearch=datetime.now()

            #infos = extract_profil_from_bellefaye(firstname=profil.firstname, lastname=profil.lastname)
            #log("Extraction bellefaye " + str(infos))

            infos = extract_profil_from_imdb(firstname=profil.firstname, lastname=profil.lastname)
            log("Extraction d'imdb " + str(infos))
            if "url" in infos:profil.add_link(infos["url"], "IMDB")
            if "photo" in infos and len(profil.photo)==0:profil.photo=infos["photo"]
            if "links" in infos: links=links+infos["links"]

            infos = extract_actor_from_unifrance(profil.firstname + " " + profil.lastname)
            log("Extraction d'un profil d'unifrance "+str(infos))
            if infos is None:
                advices = dict({"ref": "Vous devriez créer votre profil sur UniFrance"})
                transact.update(advices=advices)
            else:
                if len(infos["photo"]) > 0 and not profil.photo.startswith("http"): transact.update(photo=infos["photo"])
                transact.update(links=profil.add_link(infos["url"], "UniFrance"))
                if "links" in infos:
                    links=links+infos["links"]
                job_for=infos["url"]


            add_pows_to_profil(profil,links,all_links,job_for=job_for)



            # log("Extraction de wikipedia")
            # try:
            #     infos = extract_actor_from_wikipedia(firstname=profil.firstname,lastname=profil.lastname)
            #     sleep(random() * 5)
            #     if not infos is None:
            #         if "photo" in infos and profil.photo is None: transact.update(photo=infos["photo"])
            #         if "summary" in infos and profil.biography is None: transact.update(biography=infos["summary"])
            #         if "links" in infos and len(infos["links"])>0:
            #             links=profil.add_link(url=infos["links"][0]["url"], title=infos["links"][0]["title"],description="")
            #             transact.update(links=links)
            # except:
            #     pass

            transact.update(dtLastSearch=profil.dtLastSearch)

    clear_directory("./Temp","html")

    return True


# def find_double():
#     titles=[]
#     for p in Profil.objects.all():
#         titles.append(p.title.lower())
#
#     X = numpy.array(titles)
#     Y=pdist(X,'levinstein')



