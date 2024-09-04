from django.shortcuts import render
from django.http import HttpResponse


# /game
def game_home(request, game_name):
    context = {
        "game_name": game_name
    }
    return render(request, "games/game_home.html", context)
