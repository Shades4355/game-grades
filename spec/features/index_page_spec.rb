require 'rails_helper'

feature 'user views index page', %Q{
  As a User
  I want to view the index page
  So I can see what games are available
} do

  scenario 'view index page' do
    visit '/'

    expect(page).to have_content 'Settlers of Catan'
  end
end
