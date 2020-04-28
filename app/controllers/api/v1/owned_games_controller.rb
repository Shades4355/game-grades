class OwnedGamesController < ApplicationController
  def show
    gamesOwned = OwnedGame.find(:all, current_user.id)
  end

  def create
    newOwnedGame = OwnedGame.new(strong_params)
    newOwnedGame.user = current_user
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
