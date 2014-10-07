require 'spec_helper'

RSpec.describe UserController, :type => :controller do
  let!(:user) {User.create!(name: "test",
          email: "tester@1234.com",
          password: "testing",
          password_confirmation: "testing")}

  describe "#new" do  #this is failing
    it "assigns the user to User.new" do
      @user = User.new
    get :new
    expect(assigns(:user)).to be_a_new(User)
    end
  end

  describe "#create" do
    it "creates a new user if params are valid" do
      expect {
        post :create, user: {
          name: "seabass",
          email: "bass@gmail.com",
          password: "password",
          password_confirmation: "password",
        }
      }.to change {User.count}.by(1)
    end
  end

  describe "#edit" do
     it "correctly associates the user to be edited" do
      session[:user_id] = user.id
      get :edit, id: user.id
      expect(assigns(:user)).to eq(user)
    end
  end

  describe "#update" do
    it "updates the user if params are valid" do
      session[:user_id] = user.id
      expect {
        put :update, id: user.id, user: {
          name: "C-Bass",
          email: "bass@gmail.com",
          password: "password",
          password_confirmation: "password",
        }
      }.to change { user.reload.name }.to('C-Bass')
    end
  end

  describe "#show" do #this is failing
    it "correctly finds the user to be shown" do
       session[:user_id] = user.id
       get :show, id: user.id
      expect(assigns(:user)).to eq(user)
    end
  end

  describe "#destroy" do
    it "deletes the selected user " do
       session[:user_id] = user.id
      expect { delete :destroy, :id => user.id }.to change(User, :count)
    end
  end
end
