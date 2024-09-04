from django.shortcuts import render
from django.http import HttpResponse


# /
def home(request):
    context = {
    }
    return render(request, "home.html", context)


def dashboard(request):
    context = {
    }
    return render(request, "dashboard.html", context)
