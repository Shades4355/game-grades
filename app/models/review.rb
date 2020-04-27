class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game

    validates :rating, presence: true
end
