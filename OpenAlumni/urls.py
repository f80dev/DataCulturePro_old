"""OpenAlumni URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from graphene_django.views import GraphQLView
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from alumni import views
from alumni.schema import schema

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet,basename="user")
router.register(r'extrausers', views.ExtraUserViewSet,basename="permuser")
router.register(r'profils', views.ProfilViewSet)
router.register(r'pows', views.POWViewSet)
router.register(r'extraworks', views.ExtraWorkViewSet)
router.register(r'works', views.WorkViewSet)
router.register(r'extrapows', views.ExtraPOWViewSet)
router.register(r'profilsdoc', views.ProfilDocumentView,basename="profilsdoc")
router.register(r'powsdoc', views.PowDocumentView,basename="powsdoc")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('alumni.urls')),
    path('api/users/register', views.UserCreate.as_view()),
    path('api/resend/', views.resend),
    path('api/send_to/', views.send_to),
    path('api/test/', views.test),
    path('api/getyaml/', views.getyaml),
    path('api/initdb/', views.initdb),
    path('api/helloworld/', views.helloworld),
    url('^api/api-token-auth/', obtain_auth_token),
    path("api/",include(router.urls)),
    url(r'^graphql$', GraphQLView.as_view(graphiql=True,schema=schema))
]