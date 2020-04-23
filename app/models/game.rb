class Game < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :player_num, presence: true
end
