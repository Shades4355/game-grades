class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :player_num, :description
  
  has_many :reviews
end
