class StatController < ApplicationController
  skip_before_filter :verify_authenticity_token
  def index

  end

  def new

  end

  def create
    @game = Game.find(params[:game_id])
    @stats = @game.stats.new(stat_params)
    if @stats.save
      respond_to do |format|
      format.html { redirect_to edit_game_path(@game) }
      format.json { render :json => @stats }
      end
    else
      flash[:notice] = "Game was not saved, please try again."
      redirect_to user_path(session[:user_id])
    end
  end

  def show_all
    @game = Game.find(params[:id])
    @stats = @game.stats
    respond_to do |f|
      f.html { redirect_to edit_game_path(@game)}
      f.json { render json: @stats}
    end
  end


  def show

  end

  def edit

  end

  def update #post for edit

  end

  def destroy

  end

    private

  def stat_params
    params.require(:stat).permit(:game_id, :x_coord, :y_coord,:made, :stat_type)
  end


end
