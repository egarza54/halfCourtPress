class SessionController < ApplicationController

  skip_before_filter :verify_authenticity_token


  def login
      @user = get_user(params[:user])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user.id)
    else
      flash[:notice] = "Invalid username or password "
      redirect_to root_path
    end

  end

  def logout
    session.clear
    flash[:notice] = "See you next time!"
    redirect_to root_path
  end

  protected

  def get_user(user_params)
    User.find_by(email: user_params[:email])
  end
end
