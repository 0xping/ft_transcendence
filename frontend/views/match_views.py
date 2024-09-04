from django.shortcuts import render
from django.http import HttpResponse


# /game/match
def match_entry(request, game_name):
    context = {
        "game_name": game_name
    }
    return render(request, "games/match_entry.html", context)


# /game/match/match_id


def match(request, game_name, match_id):
    context = {
        "game_name": game_name,
        "match_id": match_id,
        "match_type": "normal"
    }
    return render(request, "games/match.html", context)
