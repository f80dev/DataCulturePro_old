
#Configuration de développpement

##Installation d'un serveur
Le projet repose pour sur un serveur virtuel sous Fedora.
Depuis la connexion Root, on lance

<pre>
dnf install podman
firewall-cmd --zone=public --add-port=9090/tcp
</pre>



##Netoyage préalable
Il peut être nécessaire de netoyer la base prélablement:
<pre>
python manage.py flush
python manage.py search_index --rebuild
</pre>

##Installation
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
firewall-cmd --zone=public --add-port=5432/tcp
docker rm -f postgres & docker run --name postgres -p 5432:5432  -v /root/postgre:/var/lib/postgresql/data --restart=always  -e POSTGRES_PASSWORD=hh4271 -e POSTGRES_DB=alumni_db -e POSTGRES_USER=hhoareau -d postgres:13-alpine
</pre>
ou avec podman
<pre>
setenforce 0 
mkdir /root/postgre
podman rm -f postgre
podman run --name postgre -p 5432:5432  -v /root/postgre:/var/lib/postgresql/data --restart=always  -e POSTGRES_PASSWORD=hh4271 -e POSTGRES_DB=alumni_db -e POSTGRES_USER=hhoareau -d postgres:13-alpine
</pre>

Si probléme d'accès au répertoire /root/postgres, il faut fixer avec su -c "setenforce 0"

Créer les utilisateurs admin & anonymous


##Le serveur Django
<pre>
cd /root
mkdir nginx
wget https://raw.githubusercontent.com/f80defv/OpenAlumni/master/nginx.conf nginx.conf && mv nginx.conf /root/nginx
wget https://raw.githubusercontent.com/f80dev/OpenAlumni/master/Dockerfile ./nginx/ 
wget https://raw.githubusercontent.com/f80dev/OpenAlumni/master/docker-compose.yml
docker-compose up -d --build
</pre>


##Elasticsearch
démarrer le noeud elasticsearch
<pre>
firewall-cmd --zone=public --add-port=9200/tcp
firewall-cmd --zone=public --add-port=9300/tcp
podman rm -f elastic_search_server
podman run -p 9200:9200 -p 9300:9300 --restart=always -e "discovery.type=single-node" --name elastic_search_server -d docker.elastic.co/elasticsearch/elasticsearch:7.9.2
</pre>

ou avec podman (fedora 32)
<pre>
podman run -p 9200:9200 -p 9300:9300 --restart=always -e "discovery.type=single-node" --name elastic_search_server -d docker.elastic.co/elasticsearch/elasticsearch:7.9.2
</pre>

puis reconstruire l'index par 
<pre>
python manage.py search_index --rebuild
</pre>


#Développement
##Utilisation d'elasticsearch
Voir https://django-elasticsearch-dsl.readthedocs.io/en/latest/about.html
et l'intégration avec le rest framework : https://django-elasticsearch-dsl-drf.readthedocs.io/en/latest/quick_start.html


#Tests
##tester en production
Ouverture via https://dcp.f80.fr/search

##tester en local
Ouverture via http://localhost:4200/admin

#Divers

https://bezkoder.com/django-angular-crud-rest-framework/

Accès aux information LinkedIn:

Demande d'accès au profil complet : https://docs.microsoft.com/en-us/linkedin/shared/references/v2/profile/full-profile?context=linkedin/consumer/context


#Installation du serveur
##Installation de cockpit
<pre>
dnf install cockpit
dnf install cockpit-dashboard cockpit-podman cockpit-machines cockpit-networkmanager cockpit-packagekit cockpit-storaged
systemctl restart cockpit.socket
</pre>

##Installation du firewall
<pre>
dnf install 
systemctl unmask firewalld
systemctl start firewalld
systemctl enable firewalld
</pre>

##Installation de podman (remplacent de docker pour fedora)
 <pre>
 yum -y install podman
 </pre>
 

##Installation de docker-ce
<pre>
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
sudo sed -i 's/$releasever/31/g' /etc/yum.repos.d/docker-ce.repo
sudo dnf install docker-ce
sudo systemctl enable --now docker
</pre>
