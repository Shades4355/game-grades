class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Game.all
  end

   def show
    render json: Game.find(params[:id])
  end

  def create
    new_game = Game.new(game_params)
    if new_game.save
      render json: new_game
    else
      errors_array = new_game.errors.full_messages
      formatted_errors = errors_array.each { |error|
        if error.include?("Player num")
          error.sub!("num", "number")
        end
      }
      render json: { errors: formatted_errors.to_sentence }, status: :unprocessable_entity
    end
  end

  private

  def game_params
    params.require(:game).permit(:name, :description, :player_num, :photo)
  end

end
