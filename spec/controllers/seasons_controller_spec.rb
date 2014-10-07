require 'spec_helper'


RSpec.describe SeasonController, :type => :controller do
#create tests for create/show_all
  let!(:user) {User.create!(
          name: "test",
          email: "tester@1234.com",
          password: "testing",
          password_confirmation: "testing")}


describe "#create" do
    it "creates a new Season if params are valid" do
    expect {
      session[:user_id] = user.id
      team = Team.create!()
      post :create, season: {
          name: "Andy Dufresne",
          team_id: team.id
      }
    }.to change {Season.count}.by(1)
    end
  end
end
