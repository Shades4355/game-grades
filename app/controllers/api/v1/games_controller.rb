class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Game.all
  end

  def create
    new_game = Game.new(game_params)
    binding.pry
    if new_game.save
      binding.pry
      render json: new_game
    else
      render json: { error: new_game.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def game_params
    params.require(:game).permit(:name, :description, :player_num)
  end
end
