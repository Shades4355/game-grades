class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    
    validates :rating, :body, presence: true
end