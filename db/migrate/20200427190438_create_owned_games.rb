class CreateOwnedGames < ActiveRecord::Migration[5.2]
  def change
    create_table :owned_games do |t|
      t.belongs_to :user, null: false
      t.belongs_to :game, null: false
      t.timestamps null: false
    end
  end
end
