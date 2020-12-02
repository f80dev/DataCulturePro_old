from asyncio import sleep
from urllib import parse
from urllib.parse import urlparse
from imdb import IMDb
from wikipedia import wikipedia, random, re

from OpenAlumni.Tools import log
from OpenAlumni.settings import MOVIE_CATEGORIES, MOVIE_NATURE
from alumni.models import Profil, Work, PieceOfWork


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
        page = wikipedia.BeautifulSoup(wikipedia.requests.get("https://unifrance.org/recherche?q="+parse.quote(url), headers={'User-Agent': 'Mozilla/5.0'}).text,"html5lib")
        _link=page.find("a",attrs={'href': wikipedia.re.compile("^https://www.unifrance.org/film/[0-9][0-9]")})
        if _link is None:return rc

        url=_link.get("href")

    r=wikipedia.requests.get(url, headers={'User-Agent': 'Mozilla/5.0',"accept-encoding": "gzip, deflate"})
    page = wikipedia.BeautifulSoup(str(r.content,encoding="utf-8"),"html5lib")
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

    for div in page.findAll("div",attrs={'class': "details_bloc"}):
        if "Année de production : " in div.text:
            rc["year"]=div.text.replace("Année de production : ","")
        if "Genre(s) : " in div.text:
            rc["category"]=div.text.replace("Genre(s) : ","")



    if not job_for is None:
        page.find("h2")
        for div in page.findAll("div",{"class":"col-sm-5 col-xs-10"}):
            if len(div.findAll("a",{"href":job_for}))>0:
                jobs=div.findAll("h2")
                talents=div.findAll("a")
                idx=0
                for t in talents:
                    if t.get("href")==job_for:
                        if len(jobs)>idx:
                            rc["job"]=jobs[idx].text.replace(" : ","")
                            break
                    idx=idx+1


    _synopsis = page.find("div", attrs={"itemprop": "description"})
    if not _synopsis is None:rc["synopsis"]=_synopsis.getText(strip=True)

    return rc






def extract_actor_from_unifrance(name="céline sciamma"):
    url="https://www.unifrance.org/recherche/personne?q=$query&sort=pertinence".replace("$query",parse.quote(name))
    page=wikipedia.BeautifulSoup(wikipedia.requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}).text,"html5lib")
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
                page = wikipedia.BeautifulSoup(wikipedia.requests.get(infos["url"], headers={'User-Agent': 'Mozilla/5.0'}).text,"html5lib")
                film_zone=page.find("div",{"id":"filmography"})
                if film_zone is None:film_zone=page

                links = film_zone.findAll('a', attrs={'href': wikipedia.re.compile("^/title/tt")})
                infos["links"]=[]
                for l in links:
                    if len(l.getText())>3:
                        texts=l.parent.parent.text.split("(")
                        nature="long"
                        job=""

                        url = "https://www.imdb.com" + l.get("href")
                        url = url.split("?")[0]

                        if len(texts)>1:
                            nature = "inconnue"
                            for nat in MOVIE_NATURE:
                                if nat.lower() in texts[1].lower():
                                    nature=nat
                                    break
                            if nature=="inconnue":
                                log("Nature inconnue pour "+url)

                            if len(texts)>2:
                                job=texts[2].split(")")[0]

                        infos["links"].append({"url":url,"text":l.getText(),"job":job,"nature":nature})


    return infos



#http://localhost:8000/api/batch
def extract_film_from_imdb(url:str,title:str,name="",job="",):
    """

    :return:
    """
    page=wikipedia.BeautifulSoup(wikipedia.requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}).text,"html5lib")

    rc = dict({"title": title})

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

    if len(job)>0:
        rc["job"]=job
    else:
        log("Recherche du role sur le film")
        credits=wikipedia.BeautifulSoup(wikipedia.requests.get(url+"fullcredits", headers={'User-Agent': 'Mozilla/5.0'}).text,"html5lib")
        if not credits is None:
            zone_main=credits.find("div",{"id":"main"})
            if not zone_main is None:
                headers=zone_main.find_all(name="h4")
                tables=credits.find("div",{"id":"main"}).find_all("table")
                idx=0
                for t in tables:
                    if name.upper() in t.text.upper():
                        rc["job"]=headers[idx].text.replace(" by","")
                        break
                    idx=idx+1

    if "job" in rc:rc["job"]=rc["job"].split("-")[0]

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
        if not l["url"] in all_links:
            title = l["text"]
            #already_exist=PieceOfWork.objects.filter({"title":title}).exists()
            source=""
            if "unifrance" in l["url"]:
                film = extract_film_from_unifrance(l["url"], job_for=job_for)
                source="unifrance"

            if "imdb" in l["url"]:
                film=extract_film_from_imdb(l["url"],l["text"],name=profil.firstname+" "+profil.lastname,job=l["job"])
                if not "nature" in film: film["nature"]=l["nature"]
                source="IMDB"

            sleep(random() * 1200)

            log("Ajout de " + film["title"] + " à l'adresse " + l["url"])
            pow = PieceOfWork(title=film["title"])
            pow.add_link(url=l["url"], title=source)
            if "nature" in film:pow.nature=film["nature"]
            if "synopsis" in film: pow.description = film["synopsis"]
            if "visual" in film: pow.visual = film["visual"]
            if "category" in film: pow.category = film["category"]
            if "year" in film: pow.year = film["year"]

            try:
                result=PieceOfWork.objects.filter(title=pow.title)
                if len(result)==0:
                    pow.save()
                else:
                    log("Le film existe déjà dans la base, on le récupére")
                    pow=result.first()

                # TODO: a réétudier car des mises a jour de fiche pourrait nous faire rater des films
                # il faudrait désindenter le code ci-dessous mais du coup il faudrait retrouver le pow
                job = profil.job
                if "job" in film: job = film["job"]

                if not Work.objects.filter(pow_id=pow.id, profil_id=profil.id).exists():
                    log("Ajout de l'experience " + pow.title + " à " + profil.lastname)
                    work = Work(pow=pow, profil=profil, job=job, source=l["url"])
                    work.save()
            except Exception as inst:
                log("Impossible d'enregistrer le film: "+str(inst.args))



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
        if profil.delay_update(0, True) > 1000:
            log("Hors délai ==> mise a jour")

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

            transact.update(auto_updates=profil.auto_updates)

    return True
