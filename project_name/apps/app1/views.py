import sys

from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.conf import settings
from django.contrib.auth import logout


def index(request):
    context = {}
    return render(request, 'app1/index.html', context)


def logout_view(request):
    logout(request)
    return redirect('app1:index')


def profile(request):
    context = {}
    return render(request, 'app1/profile.html', context)


def about(request):
    context = {}
    return render(request, 'app1/about.html', context)


def contact(request):
    context = {}
    return render(request, 'app1/contact.html', context)


def privacy(request):
    context = {}
    return render(request, 'app1/privacy.html', context)


def terms(request):
    context = {}
    return render(request, 'app1/terms.html', context)