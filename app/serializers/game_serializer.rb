class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :player_num, :description, :current_user

  def current_user
    scope
  end

  has_many :reviews
end
