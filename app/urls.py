from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('politika', views.politika, name='politika'),
    path('mail', views.mail, name='mail'),

]