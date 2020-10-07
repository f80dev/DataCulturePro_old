from django.urls import path, include
from . import views

urlpatterns = [
    path('raz/',views.raz),
    path('importer/',views.importer),
    path('movie_importer/',views.movie_importer),
]
