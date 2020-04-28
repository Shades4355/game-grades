require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "POST#create" do
    let!(:game1) { FactoryBot.create(:game) }
    let!(:game2) { FactoryBot.create(:game) }

    let!(:user1) { User.create(email: "abc@abc.com", password: "abc123") }
    let!(:user2) { User.create(email: "123@123.com", password: "123abc") }

    let!(:good_review_data) { { review: { rating: 1, body: "It's a review", game_id: game1["id"] } } }
    let!(:bad_review_data) { { review: { rating: "", body: "It's another review", game_id: game2["id"]  } } }

    it "adds a new review to the db" do
      sign_in user1

      before_count = Review.count
      post :create, params: good_review_data, format: :json
      after_count = Review.count

      expect(after_count).to eq (before_count + 1)
    end

    it "returns the new review as json" do
      sign_in user1

      post :create, params: good_review_data, format: :json
      api_response = JSON.parse(response.body)

      num_params = 7

      expect(api_response.length).to eq num_params
      expect(api_response["rating"]).to eq good_review_data[:review][:rating]
      expect(api_response["body"]).to eq good_review_data[:review][:body]
      expect(api_response["user_id"]).to eq good_review_data[:review][:user_id]
      expect(api_response["game_id"]).to eq good_review_data[:review][:game_id]
    end

    it "does not add incomplete/bad info to db" do
      sign_in user2

      before_count = Review.count
      post :create, params: bad_review_data, format: :json
      after_count = Review.count

      expect(after_count).to eq before_count
    end

    it "returns validation error json" do
      sign_in user2

      post :create, params: bad_review_data, format: :json
      api_response = JSON.parse(response.body)

      expect(api_response["errors"]).to eq "Rating can't be blank and Rating is not a number"
    end
  end
end
