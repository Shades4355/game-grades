require 'rails_helper'

RSpec.describe Api::V1::OwnedGamesController, type: :controller do
  describe "POST#create" do
    let!(:game1) { FactoryBot.create(:game) }
    let!(:user1) { FactoryBot.create(:user) }

    it "adds a new owned game to the db" do
      sign_in user1
      before_count = OwnedGame.count
      OwnedGame.create(user: user1, game: game1)
      after_count = OwnedGame.count

      expect(after_count).to eq (before_count + 1)
    end
  end
end
