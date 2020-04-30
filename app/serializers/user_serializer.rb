class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :profile_photo

  has_many :owned_games
  has_many :games, through: :owned_games
end
