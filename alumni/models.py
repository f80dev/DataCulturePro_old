import datetime

import django
from django.contrib.auth.models import AbstractUser, User
from django.db import models

# Create your models here.
#Mise a jour du model : python manage.py makemigrations
from django.db.models import PROTECT
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

from OpenAlumni.settings import DOMAIN_APPLI


class Profil(models.Model):
    id=models.AutoField(primary_key=True)
    firstname=models.CharField(max_length=70, null=False, default='')
    lastname=models.CharField(max_length=70, null=False, default='')
    birthdate=models.DateField(null=True)
    mobile = models.CharField(max_length=20,null=True,default="06")
    nationality=models.CharField(max_length=30,null=False,default="Française")
    department=models.CharField(max_length=30,null=True)
    degree_year=models.IntegerField(null=True)
    email=models.EmailField(default="",null=False)
    photo=models.TextField(blank=True)
    gender=models.CharField(max_length=1,blank=False,default="M",choices=(('M','Male'),('F','Female')))
    linkedin=models.URLField(blank=True)
    address=models.TextField(null=True)
    town = models.TextField(null=True)
    cp=models.IntegerField(null=True)
    website=models.URLField(null=True)
    dtLastUpdate=models.DateField(null=False,auto_now=True)

    class Meta(object):
        ordering=["lastname"]

    @property
    def public_url(self):
        return DOMAIN_APPLI+"/public/?id="+str(self.id)

    @property
    def promo(self):
        return str(self.degree_year)

    @property
    def fullname(self):
        return '%s %s' % (self.firstname, self.lastname)

    def __str__(self):
        return self.email

    @property
    def name_field_indexing(self):
        return {"name":self.lastname+" "+self.firstname}





#Gestion du modele UserExtra______________________________________________________________________________________
class ExtraUser(models.Model):
    """
    Classe supplémentaire pour gérer les permissions par utilisateur
    voir https://simpleisbetterthancomplex.com/tutorial/2016/07/22/how-to-extend-django-user-model.html
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name="extrauser")
    perm = models.TextField(max_length=500, blank=True,default="")
    black_list=models.TextField(help_text="Contient l'ensemble des emails ne pouvant contacter la personne",null=False,default="")
    profil=models.OneToOneField(Profil,on_delete=models.CASCADE,null=True)
    acceptSponsor=models.BooleanField(null=False,default=False)
    sponsorOf=models.ForeignKey('ExtraUser',null=True,on_delete=models.PROTECT)




# @receiver(post_save, sender=User)
# def save_user_extra(sender, instance, **kwargs):
#     instance.user.save()

#________________________________________________________________________________________________




class Work(models.Model):
    """
    Réalisation des etudiants
    status=role dans la réalisation de l'oeuvre
    """
    id = models.AutoField(primary_key=True)
    profil = models.ForeignKey('Profil', null=False, on_delete=models.CASCADE,related_name="works")
    pow = models.ForeignKey('PieceOfWork', null=True, on_delete=models.CASCADE, related_name="works")
    dtStart=models.DateField(null=False,auto_now=True)
    dtEnd=models.DateField(auto_now=True,null=False)
    status=models.CharField(max_length=200,default="")
    job=models.CharField(max_length=200,default="")
    duration=models.IntegerField(default=0,null=False)
    comment=models.TextField(max_length=400,null=False,default="",blank=True)
    earning=models.IntegerField(default=None,null=True,help_text="Revenu percu brut pour la durée annoncée")

    @property
    def title(self):
        return self.pow.title

    def __str__(self):
        d:dict=dict({
            "job":self.job,
            "dtStart":str(self.dtStart),
            "comment":self.comment,
        })
        if self.pow is not None:d["pow"]={"title":self.pow.title}

        return str(d)




class PieceOfWork(models.Model):
    id = models.AutoField(primary_key=True)
    budget=models.IntegerField(default=0)
    dtStart=models.DateField(auto_now=True,null=False)
    dtEnd=models.DateField(auto_now=True,null=False)
    title=models.TextField(null=False,unique=True,default="sans titre",help_text="Titre de l'oeuvre, même temporaire")
    nature=models.CharField(choices=[
        ('MOVIE','Film long métrage'),('COURT','Court métrage'),('PUB','Publicité'),('CORP',"Film d'entreprise"),
        ('SONG','Single/Album')
    ],default='MOVIE',max_length=20)
    url=models.URLField(null=True)
    text_url=models.CharField(max_length=150,default="plus d'info",null=True)
    imdb=models.URLField(null=True,default="")
    owner=models.CharField(max_length=150,default="public")

    def __str__(self):
        return self.title



# class School(models.Model):
#     name = models.TextField(max_length=100)


# class Degree(models.Model):
#     profil = models.ForeignKey('Profil',null=False,on_delete=models.CASCADE)
#     school = models.ForeignKey('School',null=False,on_delete=models.CASCADE)
#     dtCreate = models.DateField(auto_now_add=True)


