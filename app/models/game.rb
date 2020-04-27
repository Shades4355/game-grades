class Game < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :player_num, presence: true
  has_many :owned_games
  has_many :users, through: :owned_games
end
