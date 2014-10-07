require 'spec_helper'

RSpec.describe TeamController, :type => :controller do
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
      post :create, team: {
          name: "Andy Dufresne",
          school: "Fuck bass and his aweful taste in movies",
          user_id: user.id
      }
    }.to change {Team.count}.by(1)
    end
  end
end
