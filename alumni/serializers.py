from urllib.request import urlopen

import yaml
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer
from rest_framework import serializers
from django.contrib.auth.models import User, Group
from rest_framework.authtoken.models import Token
from rest_framework.serializers import HyperlinkedModelSerializer
from rest_framework.validators import UniqueValidator

from OpenAlumni import settings
from OpenAlumni.Tools import reset_password, log
from alumni.documents import ProfilDocument, WorkDocument
from alumni.models import Profil, ExtraUser, PieceOfWork, Work


class UserSerializer(HyperlinkedModelSerializer):
    email = serializers.EmailField(required=True,validators=[UniqueValidator(queryset=User.objects.all())])
    class Meta:
        model = User
        fields = ['id','url', 'email','username','first_name',"last_name"]

    def create(self, data):
        """
        Création d'un profil utilisateur
        :param data:
        :return:
        """
        log("Création du password, du user et du token")
        password = reset_password(data["email"], data["username"])
        user = User.objects.create_user(username=data["username"], password=password, email=data["email"])
        token = Token.objects.create(user=user)

        log("Récupération des profils")
        lp=list(Profil.objects.filter(email=data["email"]))
        profils=yaml.safe_load(open(settings.STATIC_ROOT + "/profils.yaml", "r").read())
        perm=profils["profils"][1]["perm"]

        log("Création de l'extraUser")
        if len(lp)>0:
            eu=ExtraUser.objects.create(user=user,perm=perm,profil=lp[0],black_list="")
        else:
            eu = ExtraUser.objects.create(user=user, perm=perm,black_list="")
        eu.save()

        user.save()

        log("Procédure de création terminée")
        return user



#http://localhost:8000/api/extrausers
class ExtraUserSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = ExtraUser
        fields  = ['id','user','perm','acceptSponsor','sponsorOf','profil']




class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']




class POWSerializer(serializers.ModelSerializer):
    works = serializers.StringRelatedField(many=True,read_only=True)
    class Meta:
        model=PieceOfWork
        fields=["id","title","url","works","text_url","owner"]




#http://localhost:8000/api/profils/?filter{firstname}=Adrien
class ProfilSerializer(serializers.ModelSerializer):
    works = serializers.StringRelatedField(many=True,read_only=True)
    class Meta:
        model=Profil
        fields=["id","lastname","firstname","mobile","email","photo","gender","linkedin","degree_year","department","cp","public_url","fullname","works","address","town"]



class ExtraWorkSerializer(serializers.ModelSerializer):
    pow= POWSerializer(many=False,read_only=True)
    class Meta:
        model=Work
        fields=["id","profil","pow","dtStart","dtEnd","duration","comment","job"]


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model=Work
        fields=["profil","pow","dtStart","dtEnd","duration","comment","job","title"]



class ExtraPOWSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Work
        fields = ['profil']


#ProfilDocument utilisé par elasticsearch
class ProfilDocumentSerializer(DocumentSerializer):
    class Meta:
        document=ProfilDocument
        fields=("id","firstname","lastname","email","name","works","degree_year","public_url","photo","mobile","cp","address","town","dtLastUpdate")


class WorkDocumentSerializer(DocumentSerializer):
    class Meta:
        document=WorkDocument
        fields=("id","profil","job","pow")
