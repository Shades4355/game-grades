class Api::V1::OwnedGamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    newOwnedGame = OwnedGame.new(game_id: params["game_id"])
    newOwnedGame.user = current_user
    if newOwnedGame.save
      flash.now[:notice] = "Game added to Library"
    else
      flash.now[:notice] = newOwnedGame.errors.full_messages
    end
  end
end
