class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :player_num, :description, :current_user, :photo

  def current_user
    scope
  end

  has_many :reviews
  has_many :owned_games
  has_many :users, through: :owned_games
end
