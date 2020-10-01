import base64
import csv
from datetime import datetime
from io import StringIO
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
from OpenAlumni.Tools import dateToTimestamp, stringToUrl, reset_password, log
from OpenAlumni.settings import APPNAME, DOMAIN_APPLI
from alumni.documents import ProfilDocument, WorkDocument
from alumni.models import Profil, ExtraUser, PieceOfWork, Work
from alumni.serializers import UserSerializer, GroupSerializer, ProfilSerializer, ExtraUserSerializer, POWSerializer, \
    WorkSerializer, ExtraPOWSerializer, ExtraWorkSerializer, ProfilDocumentSerializer, WorkDocumentSerializer


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
        f=open(settings.STATIC_ROOT+"/profils.yaml", "r",encoding="utf8")
    else:
        f=urlopen(url)
    result=yaml.safe_load(f.read())
    return JsonResponse(result)


# @api_view(["POST"])
# @permission_classes([AllowAny])
# def add_job(request):
#     profil=request.POST.get("profil")
#     pow=request.POST.get("pow")
#     work=Work.objects.create(request.body)
#     return Response({"message":"Check your email"})


@api_view(["GET"])
@permission_classes([AllowAny])
def resend(request):
    email=request.GET.get("email")
    users=User.objects.filter(email=email)
    if len(users)==1:
        users[0].set_password(reset_password(users[0].email,users[0].username))
        users[0].save()
    return Response({"message":"Check your email"})


#http://localhost:8000/api/test
@api_view(["GET"])
@permission_classes([AllowAny])
def test(request):
    u=User.objects.get(username="hhoareau")
    return JsonResponse(u)



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
    Profil.objects.all().delete()
    User.objects.all().delete()
    PieceOfWork.objects.all().delete()
    log("Effacement de la base terminée")
    return Response("Compte effacé",status=200)


#http://localhost:8000/api/importer/
@api_view(["POST"])
@permission_classes([AllowAny])
def send_to(request,format=None):
    text=str(request.body,"utf8")
    log("Envoie du mail " + text)

    _from=ExtraUser.objects.get(id=request.query_params["from"])
    _profil=Profil.objects.get(id=request.query_params['profil'])

    #TODO vérifier la black liste

    send_mail(subject="["+APPNAME+"] Message de "+_from.profil.fullname,
              from_email=settings.EMAIL_HOST_USER,
              message=text,
              recipient_list=[_profil.email],
              auth_user=settings.EMAIL_HOST_USER,
              auth_password=settings.EMAIL_HOST_PASSWORD + "!!")
    return Response("Message envoyé", status=200)



#http://localhost:8000/api/importer/
@api_view(["POST"])
@permission_classes([AllowAny])
def importer(request,format=None):
    log("Importation de profil")
    txt=str(base64.b64decode(str(request.body).split("base64,")[1]),"utf8")
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
    search_fields = ('title','lastname','email','job','firstname','department','degree_year')
    filter_fields = {
        'id': {
            'field': 'id',
            'lookups': [
                LOOKUP_FILTER_RANGE,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_GT,
                LOOKUP_QUERY_GTE,
                LOOKUP_QUERY_LT,
                LOOKUP_QUERY_LTE,
            ],
        },
        'name': 'name',
    }
    ordering_fields = {
        'id': 'id',
        'name': 'name'
    }
    suggester_fields = {
        'name_suggest': {
            'field': 'name.suggest',
            'suggesters': [SUGGESTER_COMPLETION,],
        },
    }
    ordering = ("name")














@permission_classes([AllowAny])
class WorkDocumentView(DocumentViewSet):
    document=WorkDocument
    serializer_class = WorkDocumentSerializer
    pagination_class = PageNumberPagination
    lookup_field = "id"
    filter_backends = [
        FilteringFilterBackend,
        IdsFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        SearchFilterBackend,
    ]
    search_fields = ('job')
    filter_fields = {
        'id': {
            'field': 'id',
            'lookups': [
                LOOKUP_FILTER_RANGE,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_GT,
                LOOKUP_QUERY_GTE,
                LOOKUP_QUERY_LT,
                LOOKUP_QUERY_LTE,
            ],
        },
    }

    ordering_fields = {
        'id': 'id'
    }
    ordering = ("id")
