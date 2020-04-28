class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :player_num, :description

  has_many :reviews
  has_many :owned_games
  has_many :users, through: :owned_games
end
