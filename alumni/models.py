import datetime

import django
from django.contrib.auth.models import AbstractUser, User
from django.contrib.postgres.fields import JSONField
from django.db import models

# Create your models here.
#Mise a jour du model : python manage.py makemigrations

from OpenAlumni.settings import DOMAIN_APPLI


class Profil(models.Model):
    id=models.AutoField(primary_key=True)
    firstname=models.CharField(max_length=70, null=False, default='')
    lastname=models.CharField(max_length=70, null=False, default='')
    birthdate=models.DateField(null=True)
    mobile=models.CharField(max_length=20,null=True,default="06")
    nationality=models.CharField(max_length=30,null=False,default="Française")
    department=models.CharField(max_length=30,null=True)
    degree_year=models.IntegerField(null=True)
    email=models.EmailField(default="",null=False)
    photo=models.TextField(blank=True)
    gender=models.CharField(max_length=1,blank=False,default="M",choices=(('M','Male'),('F','Female')))
    linkedin=models.URLField(blank=True)
    address=models.TextField(null=True,help_text="Adresse postale, rue")
    town = models.TextField(null=True,help_text="Adresse postale, ville")
    cp=models.IntegerField(null=True,help_text="Adresse postale, code postal")
    website=models.URLField(null=True)
    dtLastUpdate=models.DateField(null=False,auto_now=True,help_text="Date de la dernière modification du profil")
    dtLastNotif=models.DateField(null=False,auto_now=True,help_text="Date de la dernière notification envoyé")
    obsolescenceScore=models.IntegerField(default=0,help_text="Indique le degré d'obsolescence probable")
    biography=models.TextField(null=True,max_length=2000)
    links = JSONField(null=True, help_text="Liens vers des références externes au profil")
    auto_updates=models.CharField(max_length=300,null=False, default="0,0,0,0,0,0",help_text="Date de mise a jour")

    class Meta(object):
        ordering=["lastname"]

    def delay_update(self,_type,update=False):
        """
        :return: delay de mise a jour en heure
        """
        lastUpdates = self.auto_updates.replace("[", "").replace("]", "").split(",")
        rc=(datetime.datetime.now().timestamp() - float(lastUpdates[_type]))/3600
        if update:
            lastUpdates[_type]=str(datetime.datetime.now().timestamp())
            self.auto_updates=",".join(lastUpdates)

        return rc


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
    level=models.IntegerField(default=0,help_text="Niveau de l'utilisateur")



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
            "name":self.profil.firstname+" "+self.profil.lastname,
            "job":self.job,
            "dtStart":str(self.dtStart),
            "comment":self.comment,
        })
        if self.pow is not None:d["pow"]={"title":self.pow.title}

        return str(d)




class PieceOfWork(models.Model):
    """
    Description des oeuvres

    """
    id = models.AutoField(primary_key=True)
    budget=models.IntegerField(default=0,help_text="Coût total de réalisation de l'oeuvre")
    visual = models.TextField(blank=True,help_text="Visuel de l'oeuvre")
    dtStart=models.DateField(auto_now=True,null=False,help_text="Date de début de la réalisation de l'oeuvre")
    dtEnd=models.DateField(auto_now=True,null=False,help_text="Date de fin de la réalisation de l'oeuvre")
    title=models.CharField(null=False,max_length=300,unique=True,default="sans titre",help_text="Titre de l'oeuvre, même temporaire")
    year=models.CharField(null=True,max_length=4,help_text="Année de sortie")
    nature=models.CharField(choices=[
        ('MOVIE','Film long métrage'),
        ('COURT','Court métrage'),
        ('PUB','Publicité'),
        ('CORP',"Film d'entreprise"),
        ('SONG','Single/Album')
    ],default='MOVIE',max_length=20,help_text="Classification de l'oeuvre")

    #Structure : "url" du document, "text" du lien
    links=JSONField(null=True,help_text="Liens vers des références externes à l'oeuvre")
    owner=models.CharField(max_length=150,default="public")
    description=models.TextField(null=True,max_length=3000,help_text="Description/Resumer de l'oeuvre")
    # Structure : "url" du document, "type" de document (str), "title" du document
    files=JSONField(null=True,help_text="Liens vers des documents attaché")
    category=models.TextField(null=True,max_length=200,help_text="Liste des categories auxquelles appartient le film")
    lang=models.CharField(max_length=50,null=True)

    def __str__(self):
        return self.title


class Movie(PieceOfWork):
    duration = models.DurationField(null=True,help_text="Durée du film")



# class School(models.Model):
#     name = models.TextField(max_length=100)


# class Degree(models.Model):
#     profil = models.ForeignKey('Profil',null=False,on_delete=models.CASCADE)
#     school = models.ForeignKey('School',null=False,on_delete=models.CASCADE)
#     dtCreate = models.DateField(auto_now_add=True)


