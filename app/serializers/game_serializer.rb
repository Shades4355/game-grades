class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :player_num, :description, :photo

  has_many :reviews
end
