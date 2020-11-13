from asyncio import sleep
from urllib import parse
from urllib.parse import urlparse

from wikipedia import wikipedia, random

from OpenAlumni.Tools import log
from alumni.models import Profil, Work, PieceOfWork


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
    if not _title is None:rc["title"]=_title.text

    _img=page.find("img",attrs={'itemprop': "image"})
    if not _img is None:
        src:str=_img.get("src")
        if not src.startswith("/ressource"):
            rc["visual"]=src

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
        url=links[0].get("href")
        page=wikipedia.BeautifulSoup(wikipedia.requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}).text,"html5lib")

        photo = ""
        _photo = page.find('div', attrs={'class': "profil-picture pull-right"})
        if not _photo is None: photo = _photo.find("a").get("href")

        for l in page.findAll('a', attrs={'href': wikipedia.re.compile("^https://www.unifrance.org/film/[0-9][0-9]*/")}):
            rc.append({"url":l.get("href"),"text":l.get("text")})
    else:
        return None

    return {"links":rc,"photo":photo,"url":url}





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






def exec_batch(profils):

    all_links=list()
    for pow in PieceOfWork.objects.all():
        for l in pow.links:
            all_links.append(l["url"])

    for profil in profils:
        transact = Profil.objects.filter(id=profil.id)
        if profil.delay_update(0, True) > 1000:
            log("Traitement de " + profil.lastname)

            # Recherche des films
            infos = extract_actor_from_unifrance(profil.firstname + " " + profil.lastname)
            if infos is None:
                advices = dict({"ref": "Vous devriez créer votre profil sur UniFrance"})
                transact.update(advices=advices)
            else:
                if len(infos["photo"]) > 0 and not profil.photo.startswith("http"): transact.update(photo=infos["photo"])
                transact.update(links=profil.add_link(infos["url"], "UniFrance"))

                for l in infos["links"]:
                    if not l["url"] in all_links:
                        film = extract_film_from_unifrance(l["url"], job_for=infos["url"])
                        sleep(random() * 2)

                        log("Ajout de " + film["title"] + " à l'adresse " + l["url"])
                        pow = PieceOfWork(title=film["title"])
                        pow.add_link(url=l["url"], title="UniFrance")
                        if "synopsis" in film: pow.description = film["synopsis"]
                        if "visual" in film: pow.visual = film["visual"]
                        if "category" in film: pow.category = film["category"]
                        if "year" in film: pow.year = film["year"]

                        try:
                            pow.save()

                            #TODO: a réétudier car des mises a jour de fiche pourrait nous faire rater des films
                            #il faudrait désindenter le code ci-dessous mais du coup il faudrait retrouver le pow
                            job = profil.job
                            if "job" in film: job = film["job"]

                            if not Work.objects.filter(pow_id=pow.id, profil_id=profil.id).exists():
                                log("Ajout de l'experience " + pow.title + " à " + profil.lastname)
                                work = Work(pow=pow, profil=profil, job=job, source=l["url"])
                                work.save()
                        except:
                            log("Impossible d'enregistrer le film")

            #Extraction de wikipedia
            try:
                infos = extract_actor_from_wikipedia(firstname=profil.firstname,lastname=profil.lastname)
                sleep(random() * 5)
                if not infos is None:
                    if "photo" in infos and profil.photo is None: transact.update(photo=infos["photo"])
                    if "summary" in infos and profil.biography is None: transact.update(biography=infos["summary"])
                    if "links" in infos and len(infos["links"])>0:
                        links=profil.add_link(url=infos["links"][0]["url"], title=infos["links"][0]["title"],description="")
                        transact.update(links=links)
            except:
                pass

            transact.update(auto_updates=profil.auto_updates)
