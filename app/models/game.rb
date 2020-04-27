class Game < ApplicationRecord
  has_many :reviews

  validates :name, presence: true
  validates :description, presence: true
  validates :player_num, presence: true
end
