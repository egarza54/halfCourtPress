require 'spec_helper'

RSpec.describe GameController, :type => :controller do
#create tests for create/show_all
  let!(:user) {User.create!(
          name: "test",
          email: "tester@1234.com",
          password: "testing",
          password_confirmation: "testing")}


describe "#create" do
    it "creates a new Game if params are valid" do
    expect {
      session[:user_id] = user.id
      season = Season.create!()
      post :create, game: {
        date: "1/12/13",
        location: "home",
        opponent: "Varisty Blues",
        win: "true",
        team_score: 100,
        opponent_score: 50,
        season_id: season.id

      }
    }.to change {Game.count}.by(1)
    end
  end


describe "#show_all" do
  pending "should retrieve all games assocciated with a season" do
    session[:user_id] = user.id
    season = Season.create!()
    game = Game.create!(season_id: season)
    expect(game).to eq(game.where(season_id: season.id))
    end
  end
end
