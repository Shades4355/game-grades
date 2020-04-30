class User < ApplicationRecord
  has_many :reviews

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :email, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  mount_uploader :profile_photo, ProfilePhotoUploader
  has_many :owned_games
  has_many :games, through: :owned_games
end
