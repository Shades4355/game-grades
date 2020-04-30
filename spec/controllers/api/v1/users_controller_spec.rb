require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "GET#show" do
    let!(:user1) { FactoryBot.create(:user) }
    let!(:user2) { FactoryBot.create(:user) }

    let!(:game1) { FactoryBot.create(:game) }

    it "returns successful response code and json content" do
      get :show, params: { id: user1.id }

      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'
    end

    it "returns correct user" do
      user1.games << game1

      get :show, params: { id: user1.id }
      api_response = JSON.parse(response.body)

      expect(api_response.length).to eq 5

      expect(api_response['email']).to eq user1.email
      expect(api_response['games'][0]['name']).to eq game1.name
    end
  end
end
