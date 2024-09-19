from django.shortcuts import render
from django.http import HttpResponse


# /game
def login(request):
    context = {
    }
    return render(request, "login.html", context)


# /signup
def signup(request):
    context = {
    }
    return render(request, "signup.html", context)
