class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :player_num, null: false
      t.timestamps null: false
    end
  end
end
