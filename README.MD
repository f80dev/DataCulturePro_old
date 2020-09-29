#Configuration de développpement
Après avoir récupérer le code, on installe une version locale de postgre
puis on execute
<pre>python manage.py makemigrations</pre>
<pre>python manage.py flush</pre>

<pre>python manage.py migrate</pre><br>

##Création du compte admin
<pre>python manage.py createsuperuser</pre>


#Tester la sécurisation
##Tester l'obtention des token
<pre>http://127.0.0.1:8000/api/token/</pre>



#Installation sur un serveur
## La base de données
Executer la commande 
<pre>
docker rm -f postgres & docker run --name postgres -p 5432:5432  -v /root/postgre:/var/lib/postgresql/data --restart=always  -e POSTGRES_PASSWORD=hh4271 -e POSTGRES_DB=alumni_db -e POSTGRES_USER=hhoareau -d postgres:13-alpine
</pre>

Créer les utilisateurs admin & anonymous


##Le serveur Django
<pre>
cd /root
mkdir nginx
wget https://raw.githubusercontent.com/f80dev/OpenAlumni/master/nginx.conf nginx.conf && mv nginx.conf /root/nginx
wget https://raw.githubusercontent.com/f80dev/OpenAlumni/master/Dockerfile ./nginx/ 
wget https://raw.githubusercontent.com/f80dev/OpenAlumni/master/docker-compose.yml
docker-compose up -d --build
</pre>


##Elasticsearch
démarrer le noeud elasticsearch
<pre>
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -d docker.elastic.co/elasticsearch/elasticsearch:7.8.
</pre>


#Développement
##Utilisation d'elasticsearch
Voir https://django-elasticsearch-dsl.readthedocs.io/en/latest/about.html
et l'intégration avec le rest framework : https://django-elasticsearch-dsl-drf.readthedocs.io/en/latest/quick_start.html


#Tests
##tester en production
Ouverture via https://openalumni.f80.fr/search

##tester en local
Ouverture via http://localhost:4200/admin

#Divers

https://bezkoder.com/django-angular-crud-rest-framework/

Accès aux information LinkedIn:

Demande d'accès au profil complet : https://docs.microsoft.com/en-us/linkedin/shared/references/v2/profile/full-profile?context=linkedin/consumer/context
