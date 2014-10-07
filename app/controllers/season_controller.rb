class SeasonController < ApplicationController
  skip_before_filter :verify_authenticity_token

  # TODO: Restrict all of these for only the relevant user
  #

  def index
    @season = Season.find(session[:user_id])
  end

  def new
    @season = Season.new
  end

  def create
    @user = User.find(session[:user_id])
    @team = Team.find(season_params[:team_id])
    @season = @team.seasons.new(season_params)

    if @season.save
      respond_to do |format|
        format.html { redirect_to user_path(@user) }
        format.json { render :json => @season }
      end
    else
      redirect_to user_path
      flash[:notice] = "Failed to create a season."
    end
  end

# '/season/team/:id'
  def show_all
    @user = User.find(session[:user_id])
    @team = Team.find(params[:id])
    @seasons = Season.where(team_id: @team.id)
    respond_to do |f|
      f.html { redirect_to user_path(@user) }
      f.json { render :json => @seasons }
      # f.html { render :json => @teams }
    end
  end



  # def show

  # end

  def edit
    @team = Team.find(@user.team_id)
  end

  def update #post for edit

  end

  def destroy
    @season = Season.find(params[:id])

    if @season.destroy
      respond_to do |f|
        f.json { render json: true}
      end
    end
  end

   private

  def season_params
    params.require(:season).permit(:name, :team_id)


  end
end
