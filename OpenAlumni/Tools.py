from html import escape
from urllib import parse
from urllib.parse import urlparse

import wikipedia
import random
import smtplib
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from io import BytesIO

import yaml
import PyPDF2
from django.conf.urls.static import static
from django.core.mail import send_mail
from linkedin_v2 import linkedin
from linkedin_v2.linkedin import LinkedInApplication

from OpenAlumni import settings
from OpenAlumni.settings import LINKEDIN_API_KEY, LINKEDIN_RETURN_URL, LINKEDIN_API_SECRET, DOMAIN_APPLI, DOMAIN_SERVER, \
    APPNAME, EMAIL_HOST_USER, STATIC_ROOT, EMAIL_TESTER

authentication = linkedin.LinkedInAuthentication(
    LINKEDIN_API_KEY,
    LINKEDIN_API_SECRET,
    LINKEDIN_RETURN_URL,
    permissions="r_basicprofil"
)
print(authentication.authorization_url)
LinkedInApplication(authentication)


def stringToUrl(txt:str):
    if txt=="http://":return ""
    if not txt.startswith("http"):txt="http://"+txt
    return txt


def extract_text_from_pdf(blob):
    reader=PyPDF2.PdfFileReader(BytesIO(blob))
    rc=list()
    for page in reader.pages:
        txt=page.extractText()
        if "(promotion" in txt:
            for line in txt.split("(promotion"):
                words=line.split(" ")
                index=len(words)-1
                while True:
                    name=words[index]
                    if len(name)>3 or index==1:break
                    index=index-1
                rc.append[name]
    return rc



def reset_password(email,username):
    """
    Initialisation / RéInitialisation du mot de passe
    :param email:
    :param username:
    :return:
    """
    password = str(tirage(999999, 100000))

    sendmail("Voici votre code",email,"welcome",dict({
        "email": email,
        "url_appli":settings.DOMAIN_APPLI+"/?email="+email,
        "username": username,
        "code": password,
        "appname": APPNAME
    }))
    print("passowrd=" + password)
    return password


def extract_film_from_unifrance(url:str):
    rc=dict()
    if not url.startswith("http"):
        log("On passe par la page de recherche pour retrouver le titre")
        page = wikipedia.BeautifulSoup(wikipedia.requests.get("https://unifrance.org/recherche?q="+parse.quote(url), headers={'User-Agent': 'Mozilla/5.0'}).text)
        _link=page.find("a",attrs={'href': wikipedia.re.compile("^https://www.unifrance.org/film/[0-9][0-9]")})
        if _link is None:return rc

        url=_link.get("href")

    r=wikipedia.requests.get(url, headers={'User-Agent': 'Mozilla/5.0',"accept-encoding": "gzip, deflate"})
    page = wikipedia.BeautifulSoup(str(r.content,encoding="utf-8"))
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

    _synopsis = page.find("div", attrs={"itemprop": "description"})
    if not _synopsis is None:rc["synopsis"]=_synopsis.getText(strip=True)

    return rc






def extract_actor_from_unifrance(name="céline sciamma"):
    url="https://www.unifrance.org/recherche/personne?q=$query&sort=pertinence".replace("$query",parse.quote(name))
    page=wikipedia.BeautifulSoup(wikipedia.requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}).text)
    links=page.findAll('a', attrs={'href': wikipedia.re.compile("^https://www.unifrance.org/annuaires/personne/")})

    rc=list()
    if len(links)>0:
        page=wikipedia.BeautifulSoup(wikipedia.requests.get(links[0].get("href"), headers={'User-Agent': 'Mozilla/5.0'}).text)
        for l in page.findAll('a', attrs={'href': wikipedia.re.compile("^https://www.unifrance.org/film/[0-9][0-9]*/")}):
            rc.append({"url":l.get("href"),"text":l.get("text")})

    return {"links":rc}



def extract_actor_from_wikipedia(name="céline sciamma"):
    wikipedia.set_lang("fr")
    rc=None
    search=wikipedia.search(name)

    if len(search)>0:
        rc=dict({"links": [],"name": name})
        page=wikipedia.page(search[0])
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
                        "text":libs[idx],
                        "href":ref
                    })
                except:
                    pass
        except:
            pass

        html:wikipedia.BeautifulSoup= wikipedia.BeautifulSoup(page.html())
        #Recherche de la section des films
        # for link in html.findAll('a', attrs={'href': wikipedia.re.compile("^http://")}):
        #     if "film" in link.text:
        #         pass

        rc["links"].append({"text":"wikipedia","href":page.url})
        rc["summary"]=page.summary

    return rc




def extract(text:str,start:str,end:str):
    """
    retourne le texte contenu entre deux chaines
    :param text:
    :param start:
    :param end:
    :return:
    """
    start = text.index(start) + len(start)
    end = text[start:].index(end) + start
    return text[start:end]



def get_faqs(filters="",domain_appli=DOMAIN_APPLI,domain_server=DOMAIN_SERVER,color="gray",format="json",summary=False,sort=True):
    with open("./faq.yaml", 'r', encoding='utf8') as f:
        body = f.read()

    # Remplacement des champs types
    body = body.replace("{{domain_appli}}", domain_appli).replace("{{appname}}", APPNAME).replace("{{appli_domain}}", domain_appli).replace("{{domain}}",domain_server)

    while ("{{link:" in body):
        signet = extract(body, "{{link:", "}}")
        url = domain_server+ "/api/faqs/"+signet+"?format=html"
        body = body.replace("{{link:" + signet + "}}", "(<a href='" + url + "'>voir</a>)")

    try:
        l_faqs: list = yaml.load(body)["content"]
    except:
        log("Le fichier de FAQ n'est pas conforme")
        return list()

    if sort:l_faqs.sort(key=lambda faq: faq["order"] if 'order' in faq else 100)

    if len(filters) > 0:
        rc=list()
        for f in l_faqs:
            for filter in filters.split(","):
                if f["index"] == filter:
                    rc.append(f)
        l_faqs=rc

    if format=="json":
        return l_faqs
    else:
        rc="<style>" \
           "body {font-family:Serif;} " \
           "h3 {font-weight:lighter;color:DarkBlue !important;} " \
           "a {text-decoration: none;color:Blue;}" \
           ".tm {font-size:large;text-decoration: none;font-weight:lighter;font-style: normal;color:DarkBlue;padding-top:3px;}" \
           "</style>"

        if summary:
            for f in l_faqs:
                rc=rc+"<a class='tm' href='#"+f["index"]+"'>"+f["title"]+"</a><br>"
            rc=rc+"<br><br>"

        for f in l_faqs:
            rc = rc + "<a name='"+f["index"]+"'><h3 style='color:"+color+"'>" + f["title"] + "</h3></a>" + f["content"] + "<br><br>"
        return rc



def sendmail(subject, _to, template, field):
    field["appname"]=APPNAME
    field["email"]=_to
    html=open_html_file(template,field)
    log("Envoi de "+html)
    if _to in EMAIL_TESTER or len(EMAIL_TESTER)==0:
        send_mail(subject,message="",from_email=EMAIL_HOST_USER,recipient_list=[_to],
                  auth_user=settings.EMAIL_HOST_USER,html_message=html,
                  auth_password=settings.EMAIL_HOST_PASSWORD + "!!")


def open_html_file(name:str,replace=dict(),domain_appli=DOMAIN_APPLI):
    if not name.endswith("html"):name=name+".html"
    name=STATIC_ROOT+"/"+name
    with open(name, 'r', encoding='utf-8') as f: body = f.read()

    style="""
        <style>
        .button {
         border: none;
         background: #d9d9d9;
         color: #fff;
         padding: 10px;
         display: inline-block;
         margin: 10px 0px;
         font-family: Helvetica, Arial, sans-serif;
         font-weight: lighter;
         font-size: large;
         -webkit-border-radius: 3px;
         -moz-border-radius: 3px;
         border-radius: 3px;
         text-decoration: none;
        }

     .button:hover {
        color: #fff;
        background: #666;
     }
    </style>
    """

    for k in list(replace.keys()):
        body=body.replace("{{"+k+"}}",str(replace.get(k)))

    body=body.replace("</head>",style+"</head>")

    while "{{faq:" in body:
        index_faq=extract(body,"{{faq:","}}")
        faq=get_faqs(filters=index_faq,domain_appli=domain_appli,color="blue",format="html")
        body=body.replace("{{faq:"+index_faq+"}}",faq)

    return body



# def send_mail(body:str,_to="paul.dudule@gmail.com",_from:str="ticketshare@f80.fr",subject=""):
#     if _to is None or len(_to)==0:return None
#     with smtplib.SMTP(SMTP_SERVER, 587) as server:
#         server.ehlo()
#         server.starttls()
#         try:
#             log("Tentative de connexion au serveur de messagerie")
#             server.login(USERNAME, PASSWORD)
#             log("Connexion réussie. Tentative d'envoi")
#
#             msg = MIMEMultipart()
#             msg.set_charset("utf-8")
#             msg['From'] = _from
#             msg['To'] = _to
#             msg['Subject'] = subject
#             msg.attach(MIMEText(body,"html"))
#
#             log("Send to "+_to+" <br><div style='font-size:x-small;max-height:300px>"+body+"</div>'")
#             server.sendmail(msg=msg.as_string(), from_addr=_from, to_addrs=[_to])
#             return True
#         except Exception as inst:
#             log("Echec de fonctionement du mail"+str(type(inst))+str(inst.args))
#             return False


def tirage(indice_sup,indice_inf=0):
    i=int(indice_sup)
    if i>0:
        return random.randrange(start=indice_inf,stop=i)

    return 0




def now():
    rc= datetime.now(tz=None).timestamp()
    return rc


start=now()
store_log=""
def log(text:str,sep='\n'):
    global store_log
    delay=int(now()-start)
    line:str=str(int(delay/60))+":"+str(delay % 60)+" : "+text
    print(line)
    store_log = line+sep+store_log[0:10000]
    return text



def dateToTimestamp(txt):
    """
    Tentative d'interpretation des dates du fichier de configuration
    :param txt:
    :return:
    """
    if txt is None:return None
    if txt=="00/00/00" or txt=="0000-00-00":return None

    if type(txt)==str and (txt.startswith('+') or txt.startswith("-")):
        txt=float(txt) #Le comptage se fait en heure

    if type(txt)==str and "," in txt:
        txt=float(txt.replace(",","."))

    if type(txt)==int or type(txt)==float:
        if txt<100000:
            rc = datetime.now().timestamp() + float(txt) * 3600
            return rc
        else:
            return txt

    if type(txt) is datetime:
        return txt.timestamp()

    txt=str(txt)
    txt=txt.strip()

    if " " not in txt:
        if not ":" in txt:
            txt=txt+" 00:00"
        else:
            txt=datetime.now().strftime("%d/%m/%Y")+" "+txt

    #Traitement du format dd/mm HH:MM
    if len(txt.split("/"))==2:
        if " " in txt:
            txt=txt.split(" ")[0]+"/"+str(datetime.now().year)+" "+txt.split(" ")[1]
        else:
            txt=txt+str(datetime.now().year)


    formats=[
        "%d_%m %H:%M",
        "%d_%m-%y %H:%M",
        "%d/%m/%Y %H:%M",
        "%-d/%-m/%Y %H:%M",
        "%d/%m/%Y %-H:%-M",
        "%d/%m/%Y %H",
        "%d/%m %H",
        "%d/%m",
        "%d %H:%M",
        "%d/%m/%y %H:%M",
        "%d/%m/%Y %H:%M:%S",
        "%d/%m/%Y %H:%M",
        "%y-%m-%d %H:%M %p",
        "%Y-%m-%d %H:%M",
        "%d-%m-%Y_%H:%M",
    ]
    for format in formats:
        try:
            dt=datetime.strptime(txt,format)
            return dt.timestamp()
        except Exception as inst:
            pass

    log("Probleme de conversion de " + str(txt) + " en date")
    return None
