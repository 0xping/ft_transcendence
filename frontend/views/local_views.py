from django.shortcuts import render
from django.http import HttpResponse


# /game/local/setup
def local_setup(request, game_name):
    context = {
        "game_name": game_name
    }
    return render(request, "games/local_setup.html", context)


# /game/local/game/match_id
def local_match(request, game_name, match_id):
    context = {
        "game_name": game_name,
        "match_id": match_id,
        "match_type": "local"

    }
    return render(request, "games/match.html", context)


# /game/local/tournament/tournament_id
def local_tournament(request, game_name, tournament_id):
    context = {
        "tournament_type": "local",
        "game_name": game_name,
        "tournament_id": tournament_id
    }
    return render(request, "games/tournament.html", context)


# /game/local/tournament/tournament_id/match/match_id
def local_tournament_match(request, game_name, tournament_id, match_id):
    context = {
        "game_name": game_name,
        "match_type": "local",
        "tournament_id": tournament_id,
        "match_id": match_id
    }
    return render(request, "games/match.html", context)
