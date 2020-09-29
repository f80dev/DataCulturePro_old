FROM f80hub/scientist_python_server_x86

#fabrication: docker build -t f80hub/openalumni . & docker push f80hub/openalumni:latest
#installation: docker rm -f openalumni && docker pull f80hub/openalumni:latest && docker run --restart=always -v /root/certs:/certs -p 8000:8000 --name openalumni -ti f80hub/openalumni:latest

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip3 install Django==3.0.8
RUN pip3 install markdown
RUN pip3 install django-oauth-toolkit
RUN pip3 install oauthlib
RUN pip3 install requests
RUN pip3 install selenium
RUN pip3 install djangorestframework
RUN pip3 install django-cors-headers
RUN pip3 install psycopg2
RUN pip3 install elasticsearch_dsl
RUN pip3 install django-sslserver
RUN pip3 install django-elasticsearch-dsl
RUN pip3 install django-elasticsearch-dsl-drf
RUN pip3 install python-linkedin-v2
RUN pip3 install graphene-django
RUN pip3 install PyYAML
RUN pip3 install django-filter

#Création des répertoires
ENV APP_HOME=/home/app
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
RUN mkdir $APP_HOME/mediafiles

WORKDIR $APP_HOME
COPY ./OpenAlumni $APP_HOME/OpenAlumni
COPY ./alumni $APP_HOME/alumni
COPY ./manage.py $APP_HOME
COPY ./static $APP_HOME/static


# chown all the files to the app user
#RUN addgroup -S app && adduser -S app -G app
#RUN chown -R app:app $APP_HOME
#USER app

EXPOSE 8000

#CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["python3", "manage.py", "runsslserver","--certificate","/certs/cert.pem","--key","/certs/privkey.pem","0.0.0.0:8000"]
#ENTRYPOINT ["/home/app/start.sh"]


