class Api::V1::OwnedGamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def show
    gamesOwned = OwnedGame.find(:all, current_user.id)
  end

  def create
    newOwnedGame = OwnedGame.new(game_id: params["game_id"])
    newOwnedGame.user = current_user
    if newOwnedGame.save
      flash.now[:notice] = "Game added to Library"
    else
      formatted_errors = newOwnedGame.errors.full_messages
    end
  end
end
