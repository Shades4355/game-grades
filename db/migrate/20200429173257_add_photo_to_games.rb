class AddPhotoToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :photo, :string, default: "https://pbs.twimg.com/profile_images/1161080182503018497/pixOpj3-_400x400.jpg"
  end
end
