class OwnedGamesController < ApplicationController
  def create
    newOwnedGame = OwnedGame.new(strong_params)
    if newOwnedGame.save
      flash.now(:success) = "Game added to Library"
    else
      formatted_errors = newOwnedGame.errors.full_messages
    end
  end
  
  private
  def strong_params
    params.require().permit(:game_id, :user_id)
  end
end
