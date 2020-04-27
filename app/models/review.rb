class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    
    validates :rating, :body, presence: true
    validates :rating, numericality: true
    validates :rating, inclusion: {in: 0..5}
end