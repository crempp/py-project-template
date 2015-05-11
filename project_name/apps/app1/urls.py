from django.conf.urls import patterns, url

from app1 import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^logout', views.logout_view, name='logout'),
    url(r'^profile', views.profile, name='profile'),
    url(r'^about', views.about, name='about'),
    url(r'^contact', views.contact, name='contact'),
    url(r'^privacy', views.privacy, name='privacy'),
    url(r'^terms', views.terms, name='terms'),
)