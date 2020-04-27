class ProfilesController < ApplicationController
  def show
    render json: Profile.find(params[:id])
  end
end
