from django.urls import path
from . import views

urlpatterns = [
    # /home
    path('', views.home, name='home'),
    path('dashboard', views.dashboard, name='dashboard'),

    # game
    path('games/<str:game_name>/', views.game_home, name='game_home'),
    path('games/<str:game_name>/match/',
         views.match_entry, name='match_entry'),
    path('games/<str:game_name>/match/<str:match_id>/',
         views.match, name='match'),

    # tournament
    path('games/<str:game_name>/tournament/',
         views.tournament_entry, name='tournament_entry'),
    path('games/<str:game_name>/tournament/<str:tournament_id>/',
         views.tournament, name='tournament'),
    path('games/<str:game_name>/tournament/<str:tournament_id>/match/<str:match_id>/',
         views.tournament_match, name='tournament_match'),

    # local mode
    path('games/<str:game_name>/local/setup/',
         views.local_setup, name='local_setup'),
    path('games/<str:game_name>/local/game/<str:match_id>/',
         views.local_match, name='local_match'),
    path('games/<str:game_name>/local/tournament/<str:tournament_id>/',
         views.local_tournament, name='local_tournament'),
    path('games/<str:game_name>/local/tournament/<str:tournament_id>/match/<str:match_id>/',
         views.local_tournament_match, name='local_tournament_match'),
]
