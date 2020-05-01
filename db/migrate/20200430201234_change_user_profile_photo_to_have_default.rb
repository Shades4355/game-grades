class ChangeUserProfilePhotoToHaveDefault < ActiveRecord::Migration[5.2]
  def up
    change_column :users, :profile_photo, :string, default: "https://images-na.ssl-images-amazon.com/images/I/71xrzuWrNfL._AC_SL1000_.jpg"
  end
  def down
    change_column :users, :profile_photo, :string
  end
end
