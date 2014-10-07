# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  edgar = User.create(name: "Edgar Garza", email: "egarza@gmail.com", password: "password")
  mirta = Team.create(name: "Varsity", school: "Mirta Ramirez", user_id: 1)
  mirta2 = Team.create(name: "Junior Varsity", school: "Mirta Ramirez", user_id: 1)
  Season.create(name: "2013", team_id: 1)
  Season.create(name: "2014", team_id: 2)
  date = ["02/05/2014", "03/04/2014", "04/04/2014", "05/04/2014", "06/04/2014", "07/04/2014"]
  boolean = ["W", "L"]
  opponents = ["Noble", "Rauner", "Bulls", "Pritzker", "Whitney Young","Simean","Cass Tech","Renaissance"]

  10.times do
    Game.create(date: date.sample, location: Faker::Address.street_address(include_secondary = false), win: boolean.sample, opponent: opponents.sample, season_id: 1)
    Game.create(date: date.sample, location: Faker::Address.street_address(include_secondary = false), win: boolean.sample, opponent: opponents.sample, season_id: 2)
  end


  30.times do
    Stat.create(game_id:1, x_coord: rand(300..1400), y_coord: rand(25..750), made: boolean.sample, stat_type: 1)
    Stat.create(game_id:2, x_coord: rand(300..1400), y_coord: rand(25..750), made: boolean.sample, stat_type: 1)
  end

