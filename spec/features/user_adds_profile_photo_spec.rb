require "rails_helper"

feature "profile photo" do
  scenario "user uploads a profile photo" do
    visit root_path
    click_link "Sign Up"

    fill_in "Email", with: "test@email.com"
    fill_in "Password", with: "Imapassword"
    fill_in "Password confirmation", with: "Imapassword"
    attach_file :user_profile_photo, "#{Rails.root}/spec/support/images/Dr-Phil-2013.jpg"
    click_button "Sign up"

    expect(page).to have_content("Welcome! You have signed up successfully.")
    expect(page).to have_css("img[src*='Dr-Phil-2013.jpg']")
  end
end
