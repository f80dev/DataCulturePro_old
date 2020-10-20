import base64
import csv
from datetime import datetime, timedelta
from io import StringIO
from random import random
from threading import Thread
from time import sleep
from urllib.request import urlopen

import yaml
from django.core.mail import send_mail
from django.http import JsonResponse
from django_elasticsearch_dsl_drf.constants import LOOKUP_FILTER_RANGE, LOOKUP_QUERY_IN, LOOKUP_QUERY_GT, \
    LOOKUP_QUERY_GTE, LOOKUP_QUERY_LT, LOOKUP_QUERY_LTE, SUGGESTER_COMPLETION
from django_elasticsearch_dsl_drf.filter_backends import FilteringFilterBackend, IdsFilterBackend, \
    OrderingFilterBackend, DefaultOrderingFilterBackend, SearchFilterBackend
from django_elasticsearch_dsl_drf.pagination import PageNumberPagination
from django_elasticsearch_dsl_drf.viewsets import  DocumentViewSet
from rest_framework.decorators import api_view, action, permission_classes
from rest_framework.filters import SearchFilter
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from selenium.webdriver import DesiredCapabilities
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.common.proxy import ProxyType, Proxy

import requests
from django.contrib.auth.models import User, Group

# Create your views here.
from django.shortcuts import redirect
from rest_framework import viewsets, generics

from OpenAlumni import settings
from OpenAlumni.Tools import dateToTimestamp, stringToUrl, reset_password, log, extract_text_from_pdf, open_html_file, \
    sendmail, extract_actor_from_wikipedia, extract_actor_from_unifrance, extract_film_from_unifrance
from OpenAlumni.settings import APPNAME, DOMAIN_APPLI, EMAIL_HOST_USER
from alumni.documents import ProfilDocument, PowDocument
from alumni.models import Profil, ExtraUser, PieceOfWork, Work
from alumni.serializers import UserSerializer, GroupSerializer, ProfilSerializer, ExtraUserSerializer, POWSerializer, \
    WorkSerializer, ExtraPOWSerializer, ExtraWorkSerializer, ProfilDocumentSerializer, \
    PowDocumentSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    exemples:
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
    filter_backends = (SearchFilter,)
    search_fields = ["email","id"]



class ExtraUserViewSet(viewsets.ModelViewSet):
    queryset = ExtraUser.objects.all()
    serializer_class = ExtraUserSerializer
    permission_classes = (AllowAny,)
    filter_backends = (SearchFilter,)
    search_fields = ["user__email","id","user__username"]



class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )



class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer



#http://localhost:8000/api/profils?firstname=aline
class ProfilViewSet(viewsets.ModelViewSet):
    queryset = Profil.objects.all()
    serializer_class = ProfilSerializer
    permission_classes = [AllowAny]
    filter_backends = (SearchFilter,)
    search_fields = ["email"]


#http://localhost:8000/api/pow
class POWViewSet(viewsets.ModelViewSet):
    queryset = PieceOfWork.objects.all()
    serializer_class = POWSerializer
    permission_classes = [AllowAny]
    filter_backends = (SearchFilter,)
    search_fields = ["title"]


#http://localhost:8000/api/works
class ExtraWorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = ExtraWorkSerializer
    permission_classes = [AllowAny]
    filter_backends = (SearchFilter,)
    search_fields = ["profil__id"]


class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [AllowAny]



class ExtraPOWViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = ExtraPOWSerializer
    permission_classes = [AllowAny]


@api_view(["GET"])
@permission_classes([AllowAny])
def getyaml(request):
    url=request.GET.get("url","")
    if len(url)==0:
        name=request.GET.get("name","profil")
        f=open(settings.STATIC_ROOT+"/"+name+".yaml", "r",encoding="utf-8")
    else:
        f=urlopen(url)
    result=yaml.safe_load(f.read())
    return JsonResponse(result,safe=False)




@api_view(["GET"])
@permission_classes([AllowAny])
def resend(request):
    email=request.GET.get("email")
    users=User.objects.filter(email=email)
    if len(users)==1:
        users[0].set_password(reset_password(users[0].email,users[0].username))
        users[0].save()
    return Response({"message":"Check your email"})


#http://localhost:8000/api/test/?movie=joker
@api_view(["GET"])
@permission_classes([AllowAny])
def test(request):
    infos=extract_film_from_unifrance(request.GET.get("movie"))
    return JsonResponse(infos)




#http://localhost:8000/api/batch
@api_view(["GET"])
@permission_classes([AllowAny])
def batch(request):
    for profil in Profil.objects.all():
        transact = Profil.objects.filter(id=profil.id)
        if profil.delay_update(0,True)>1000:
            log("Traitement de "+profil.lastname)

            # Recherche des films
            infos = extract_actor_from_unifrance(profil.firstname + " " + profil.lastname)
            for l in infos["links"]:
                sleep(random()*5)
                film = extract_film_from_unifrance(l["url"])
                pow = PieceOfWork.objects.filter(title=film["title"])
                if not pow.exists():
                    log("Ajout de " + film["title"])
                    pow = PieceOfWork(title=film["title"])
                    if "synopsis" in film: pow.description = film["synopsis"]
                    if "visual" in film:pow.visual=film["visual"]
                    if "category" in film:pow.category=film["category"]
                    if "year" in film:pow.year=film["year"]

                    pow.save()
                    work = Work(pow=pow, profil=profil,job=profil.department)
                    work.save()


            try:
                infos=extract_actor_from_wikipedia(profil.firstname+" "+profil.lastname)
                sleep(random()*5)
                if not infos is None:

                    if "photo" in infos:transact.update(photo=infos["photo"])
                    if "summary" in infos and len(profil.biography)==0:transact.update(biography=infos["summary"])
                    if "links" in infos:
                        if profil.links is None:
                            profil.links = infos["links"]
                        else:
                            for l in infos["links"]:
                                profil.links.append(l)
                        transact.update(links=profil.links)

            except:
                pass

        transact.update(auto_updates=profil.auto_updates)



@api_view(["GET"])
@permission_classes([AllowAny])
def initdb(request):
    profils=yaml.load(DOMAIN_APPLI+"/assets/profils.yaml")




@api_view(["GET"])
@permission_classes([IsAuthenticatedOrReadOnly])
def helloworld(request):
    return Response({"message": "Hello world"})



@api_view(["GET"])
def scrap_linkedin(request):
    """
    test: http://localhost:8000/api/scrap_linkedin
    :return:
    """
    proxy=request.GET.get("proxy","")
    capabilities = DesiredCapabilities.CHROME
    if len(proxy) > 0:
        p = Proxy()
        p.proxy_type = ProxyType.MANUAL
        p.http_proxy = proxy
        p.socks_proxy = proxy
        p.ssl_proxy = proxy
        p.add_to_capabilities(capabilities)

    url="https://www.linkedin.com/in/hhoareau/"
    driver:WebDriver = WebDriver(command_executor="http://127.0.0.1:9515", desired_capabilities=capabilities)
    driver.implicitly_wait(1)
    driver.get(url)
    sections=driver.find_elements_by_tag_name("section")
    return Response("scrapped",200)




#http://localhost:8000/api/raz/
@api_view(["GET"])
@permission_classes([AllowAny])
def raz(request):
    filter=request.GET.get("tables","all")
    log("Effacement de "+filter)

    if "profils" in filter or filter=="all":
        log("Effacement des profils")
        Profil.objects.all().delete()

    if "users" in filter  or filter=="all":
        log("Effacement des utilisateurs")
        User.objects.all().delete()

    if "pows" in filter  or filter=="all":
        log("Effacement des oeuvres")
        PieceOfWork.objects.all().delete()

    log("Effacement de la base terminée")
    return Response("Compte effacé",status=200)



@api_view(["GET"])
@permission_classes([AllowAny])
def ask_for_update(request):
    delay_notif=request.GET.get("delay_notif",10)
    obso_max = request.GET.get("obso_max", 20)
    now=datetime.timestamp(datetime.now())
    count=0
    for profil in Profil.objects.all():
        days=(now-dateToTimestamp(profil.dtLastUpdate))/(3600*24)
        days_notif=(now-dateToTimestamp(profil.dtLastNotif))/(3600*24)

        #TODO: a compléter avec d'autres criteres
        profil.obsolescenceScore=days*2

        if profil.obsolescenceScore>obso_max and days_notif>delay_notif:
            Profil.objects.filter(id=profil.id).update(dtLastNotif=datetime.now(),obsolescenceScore=profil.obsolescenceScore)
            sendmail("Mettre a jour votre profil",profil.email,"update",{
                "name":profil.firstname,
                "appname":APPNAME,
                "url":DOMAIN_APPLI+"/edit?id="+str(profil.id)+"&email="+profil.email,
                "lastUpdate":str(profil.dtLastUpdate)
            })
            count=count+1
        else:
            Profil.objects.filter(id=profil.id).update(obsolescenceScore=profil.obsolescenceScore)

    return Response("Message envoyé à "+str(count)+" comptes", status=200)


#http://localhost:8000/api/importer/
@api_view(["POST"])
@permission_classes([AllowAny])
def send_to(request):
    text=str(request.body,"utf8")
    log("Envoie du mail " + text)

    _from=ExtraUser.objects.get(id=request.query_params["from"])
    _profil=Profil.objects.get(id=request.query_params['profil'])

    #TODO vérifier la black liste

    sendmail("["+APPNAME+"] Message de "+_from.profil.fullname,
              from_email=settings.EMAIL_HOST_USER,
              message=text,
              recipient_list=[_profil.email])
    return Response("Message envoyé", status=200)



#http://localhost:8000/api/movie_importer/
@api_view(["POST"])
@permission_classes([AllowAny])
def movie_importer(request):
    log("Importation de films")
    header=str(request.body)[20:35]
    if "excel" in header:
        txt = str(base64.b64decode(str(request.body).split("base64,")[1]),encoding="utf-8")
        d = csv.reader(StringIO(txt), delimiter=";")
    else:
        d=extract_text_from_pdf(base64.b64decode(str(request.body).split("base64,")[1]))
        return

    i = 0
    record = 0
    for row in list(d):
        if i>0:

            #dtEnd=str(datetime.fromtimestamp(dateToTimestamp(row[3]))),

            if row[6]=="":row[6]="0"
            if row[11]=="":row[11]="1800"

            pow:PieceOfWork=PieceOfWork(
                title=row[0].replace(u'\xa0', u' '),
                description=row[1],
                visual=row[4],
                nature=row[5],
                dtStart=row[2],
                budget=int(row[6]),
                category=row[7],
                links=[{"url":row[9],"text":row[8]}],
                lang="US",
                year=int(row[11]),
                owner=row[10]
            )

            try:
                pow.category=pow.category.replace("|"," ")
                rc = pow.save()
                log("Ajout de "+pow.title)
                record = record + 1
            except Exception as inst:
                log("Probléme d'enregistrement" + str(inst))
        i=i+1
    log("Importation terminé de "+str(record)+" films")

    return Response(str(record) + " films importés", 200)



#http://localhost:8000/api/importer/
@api_view(["POST"])
@permission_classes([AllowAny])
def importer(request,format=None):
    log("Importation de profil")
    txt=str(base64.b64decode(str(request.body).split("base64,")[1]),"utf-8")
    d =csv.reader(StringIO(txt), delimiter=";")
    i=0
    record=0
    for row in d:
        if i>0:
            if row[5]=="1":
                if len(row[34])==0:
                    if row[0]=="Monsieur":
                        photo="/assets/img/boy.png"
                    else:
                        photo = "/assets/img/girl.png"
                else:
                    photo=stringToUrl(row[34])

                #Calcul
                ts=dateToTimestamp(row[3])
                dt = None
                if not ts is None:dt=datetime.fromtimestamp(ts)

                profil=Profil(
                    firstname=row[1],
                    lastname=row[2],
                    nationality=row[4],
                    birthdate=dt,
                    department=row[8],
                    degree_year=int(row[7]),
                    cp=row[11],
                    website=stringToUrl(row[18]),
                    email=row[14],
                    photo=photo,
                    linkedin=row[33]
                )
                try:
                    rc=profil.save()
                    record=record+1
                except Exception as inst:
                    log("Probléme d'enregistrement"+str(inst))
        i=i+1
    return Response(str(record)+" profils importés",200)




@api_view(["GET"])
def oauth(request):
    """
    voir https://docs.microsoft.com/fr-fr/linkedin/shared/authentication/authorization-code-flow?context=linkedin/context
    :param request:
    :return:
    """
    code=request.GET.get("code")
    r = requests.post('https://www.linkedin.com/oauth/v2/accessToken', data={
        'grant_type': 'authorization_code',
        'code': code,
        'client_id':'86sko2r66j8l8k',
        'client_secret':'5daYMxKMEvWvfiuX',
        'redirect_uri':'http://localhost:8000/api/oauth',
    })
    if r.status_code==200:
        access_token=r.json()["access_token"]
        headers={'Authorization':'Bearer '+access_token}
        res_profil=requests.get("https://api.linkedin.com/v2/me?fields=id,firstName,lastName,educations",headers=headers)
        if res_profil.status_code==200:
            profil=res_profil.json()
        else:
            print(res_profil.text)
    else:
        print(r.status_code)

    return redirect("http://localhost:4200")




@permission_classes([AllowAny])
class ProfilDocumentView(DocumentViewSet):
    document=ProfilDocument
    serializer_class = ProfilDocumentSerializer
    pagination_class = PageNumberPagination
    lookup_field = "id"
    filter_backends = [
        FilteringFilterBackend,
        IdsFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        SearchFilterBackend,
    ]
    search_fields = ('works__title','works__job','lastname','firstname','department','promo')
    filter_fields = {
        'id': {
            'field': 'id',
            'lookups': [LOOKUP_FILTER_RANGE,LOOKUP_QUERY_IN,LOOKUP_QUERY_GT,LOOKUP_QUERY_GTE,LOOKUP_QUERY_LT,LOOKUP_QUERY_LTE,],
        },
        'name': 'name',
        'title':'works__title',
        'promo':'promo',
        'job':'department'
    }

    ordering_fields = {
        'id':'id',
        'lastname':'lastname'
    }

    suggester_fields = {
        'name_suggest': {
            'field': 'lastname',
            'suggesters': [SUGGESTER_COMPLETION,],
        },
    }
    ordering = ("name")



@permission_classes([AllowAny])
class PowDocumentView(DocumentViewSet):
    document=PowDocument
    serializer_class = PowDocumentSerializer
    pagination_class = PageNumberPagination
    lookup_field = "id"
    filter_backends = [
        FilteringFilterBackend,
        IdsFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        SearchFilterBackend,
    ]
    search_fields = ('title','description','category',"nature","year")
    filter_fields = {
        'id': {
            'field': 'id',
            'lookups': [LOOKUP_FILTER_RANGE,LOOKUP_QUERY_IN,LOOKUP_QUERY_GT,LOOKUP_QUERY_GTE,LOOKUP_QUERY_LT,LOOKUP_QUERY_LTE],
        }
    }
    ordering_fields = {
        'title': 'title'
    }

