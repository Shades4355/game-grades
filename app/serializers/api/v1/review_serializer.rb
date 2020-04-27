class ReviewSerializer < ActiveModel::ReviewSerializer
    attributes :rating, :body, :id, :user_id, :game_id
    
    belongs_to :game
end