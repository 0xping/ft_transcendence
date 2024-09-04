from datetime import datetime, timedelta
from django.shortcuts import render
from django.http import HttpResponse


# /game/tournament
def tournament_entry(request, game_name):
    context = {
        "game_name": game_name
    }
    return render(request, "games/tournament_entry.html", context)


# /game/tournament/tournament_id
def tournament(request, game_name, tournament_id):
    context = {
        "game_name": game_name,
        "tournament_type": "normal",
        "tournament_id": tournament_id
    }
    return render(request, "games/tournament.html", context)


# /game/tournament/tournament_id/match/match_id
def tournament_match(request, game_name, tournament_id, match_id):
    context = {
        "game_name": game_name,
        "tournament_id": tournament_id,
        "match_type": "tournament",
        "match_id": match_id
    }
    # response = render(request, "games/match.html", context)
    # response['Cache-Control'] = 'max-age=3600'
    return render(request, "games/match.html", context)
