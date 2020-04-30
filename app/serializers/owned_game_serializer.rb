class OwnedGameSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :game
  belongs_to :user
end
