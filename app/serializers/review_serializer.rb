class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :user_id, :game_id, :updated_at

  belongs_to :game
end
