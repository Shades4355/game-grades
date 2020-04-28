require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "POST#create" do
    let!(:good_review_data) { { review: { rating: "1", body: "It's a review", user_id: "4", game_id: "1" } } }
    let!(:bad_review_data) { { review: { rating: "", body: "It's another review", user_id: "5", game_id: "2"  } } }

    it "adds a new review to the db" do
      before_count = Review.count
      post :create, params: good_review_data, format: :json
      after_count = Review.count

      expect(after_count).to eq (before_count + 1)
    end

    it "returns the new review as json" do
      post :create, params: good_review_data, format: :json
      api_response = JSON.parse(response.body)

      let num_params = 7

      expect(api_response.length).to eq num_params
      expect(api_response["rating"]).to eq good_review_data[:review][:rating]
      expect(api_response["body"]).to eq good_review_data[:review][:body]
      expect(api_response["user_id"]).to eq good_review_data[:review][:user_id]
      expect(api_response["game_id"]).to eq good_review_data[:review][:game_id]
    end

    it "does not add incomplete/bad info to db" do
      before_count = review.count
      post :create, params: bad_review_data, format: :json
      after_count = review.count

      expect(after_count).to eq before_count
    end

    it "returns validation error json" do
      post :create, params: bad_review_data, format: :json
      api_response = JSON.parse(response.body)

      expect(api_response["errors"]).to eq "Rating can't be blank"
    end
  end
end