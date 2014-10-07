Rails.application.routes.draw do


  # You can have the root of your site routed with "root"
  root 'user#index'

  #create user routes
  resources :user
  get '/user/:id/teams' => 'user#show_all_teams'
  get '/user/:id/team/:team_id/seasons' => 'user#show_all_team_seasons'
  get '/user/:id/season/:season_id/games' => 'user#show_all_season_games'
  get '/user/:id/game/:game_id/stats' => 'user#show_all_game_stats'
  #sessions routes
  post '/session/login' => 'session#login'
  get '/session/logout' => 'session#logout', :as => 'logout'
  get '/user/:id/team/all' => 'user#show_all'
  get '/user/:id/season/all' => 'user#show_all_season'

  resources :team
  #get '/team/user/all' => 'team#show_all'
  #get '/user/team/all' => 'user#show_all_teams'

  resources :stat
  get '/game/:id/stat' => 'stat#show_all'

  resources :season
  get '/season/team/:id' => 'season#show_all'


  resources :game
   get '/game/season/:id' => 'game#show_all'



end
