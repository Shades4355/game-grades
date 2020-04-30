require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "POST#create" do
    let!(:game1) { FactoryBot.create(:game) }
    let!(:game2) { FactoryBot.create(:game) }

    let!(:user1) { User.create(email: "abc@abc.com", password: "abc123") }
    let!(:user2) { User.create(email: "123@123.com", password: "123abc") }

    it "adds a new review to the db" do
      sign_in user1

      good_review_data = { game_id: game1.id, review: { rating: 1, body: "It's a review" } }
      before_count = Review.count
      post :create, params: good_review_data, format: :json
      after_count = Review.count

      expect(after_count).to eq (before_count + 1)
    end

    it "returns the new review as json" do
      sign_in user1

      good_review_data = { game_id: game1.id, review: { rating: 1, body: "It's a review" } }
      post :create, params: good_review_data, format: :json
      api_response = JSON.parse(response.body)

      num_params = 7

      expect(api_response.length).to eq num_params
      expect(api_response["rating"]).to eq good_review_data[:review][:rating]
      expect(api_response["body"]).to eq good_review_data[:review][:body]
      expect(api_response["user_id"]).to eq user1[:id]
      expect(api_response["game_id"]).to eq game1[:id]
    end

    it "does not add incomplete/bad info to db" do
      sign_in user2

      bad_review_data = { game_id: game2.id, review: { rating: " ", body: "It's another review" } }

      before_count = Review.count
      post :create, params: bad_review_data, format: :json
      after_count = Review.count

      expect(after_count).to eq before_count
    end

    it "returns validation error json" do
      sign_in user2

      bad_review_data = { game_id: game2.id, review: { rating: " ", body: "It's another review" } }

      post :create, params: bad_review_data, format: :json
      api_response = JSON.parse(response.body)

      expect(api_response["errors"]).to eq "Rating can't be blank and Rating is not a number"
    end
  end

  describe("GET#edit") do
    let!(:game1) { FactoryBot.create(:game) }
    let!(:game2) { FactoryBot.create(:game) }

    let!(:user1) { User.create(email: "abc@abc.com", password: "abc123") }
    let!(:user2) { User.create(email: "123@123.com", password: "123abc") }

    it "returns successful response code and json content" do
      sign_in user1

      existing_review = Review.create(
        user: user1,
        game: game1,
        rating: 5,
        body: "Such a good game"
      )
      get :edit, params: { id: existing_review.id }

      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'
    end

    it "returns the one review to be edited" do
      sign_in user1

      existing_review = Review.create(
        user: user1,
        game: game1,
        rating: 5,
        body: "Such a good game"
      )
      get :edit, params: { id: existing_review.id }
      api_response = JSON.parse(response.body)

      expect(api_response.length).to eq 7

      expect(api_response['id']).to eq existing_review.id
      expect(api_response['user_id']).to eq existing_review.user.id
      expect(api_response['game']['id']).to eq existing_review.game.id
      expect(api_response['rating']).to eq existing_review.rating
      expect(api_response['body']).to eq existing_review.body
    end

    it "does not return another review" do
      sign_in user1

      existing_review = Review.create(
        user: user1,
        game: game1,
        rating: 5,
        body: "Such a good game"
      )

      existing_review_2 = Review.create(
        user: user2,
        game: game2,
        rating: 1,
        body: "Not such a good game"
      )
      get :edit, params: { id: existing_review.id }
      api_response = JSON.parse(response.body)

      expect(api_response['id']).not_to eq existing_review_2.id
    end
  end

  describe("POST#update") do
    let!(:game1) { FactoryBot.create(:game) }
    let!(:game2) { FactoryBot.create(:game) }

    let!(:user1) { User.create(email: "abc@abc.com", password: "abc123") }
    let!(:user2) { User.create(email: "123@123.com", password: "123abc") }

    it "does not add an additional review to the db" do
      sign_in user1

      new_review = Review.create(
        user: user1,
        game: game1,
        rating: 5,
        body: "Such a good game"
      )
      before_update_count = Review.count

      updated_review_params = {
        rating: 4,
        body: "Such a good game"
      }
      patch :update, params: { id: new_review.id, review: updated_review_params }
      after_update_count = Review.count

      expect(before_update_count).to eq after_update_count
    end

    it "returns the updated review" do
      sign_in user1

      new_review = Review.create(
        user: user1,
        game: game1,
        rating: 5,
        body: "Such a good game"
      )

      updated_review_params = {
        rating: 2,
        body: "Not as good as I thought"
      }

      patch :update, params: { id: new_review.id, review: updated_review_params }
      api_response = JSON.parse(response.body)

      expect(api_response['id']).to eq new_review.id
      expect(api_response['body']).to eq updated_review_params[:body]
      expect(api_response['rating']).to eq updated_review_params[:rating]
      expect(api_response['user_id']).to eq new_review.user.id
    end

    it "returns errors with poor data" do
      sign_in user2

      existing_review_2 = Review.create(
        user: user2,
        game: game2,
        rating: 1,
        body: "Not such a good game"
      )

      updated_review_params = {
        rating: " ",
        body: "Not such a good game"
      }

      patch :update, params: { id: existing_review_2.id, review: updated_review_params }
      api_response = JSON.parse(response.body)

      expect(api_response['errors']).to eq "Rating can't be blank and Rating is not a number"
    end
  end

  describe("POST#destroy") do
    let!(:game1) { FactoryBot.create(:game) }
    let!(:game2) { FactoryBot.create(:game) }

    let!(:user1) { User.create(email: "abc@abc.com", password: "abc123") }
    let!(:user2) { User.create(email: "123@123.com", password: "123abc") }

    it "removes a review from the database" do
      sign_in user1

      new_review = Review.create(
        user: user1,
        game: game1,
        rating: 5,
        body: "Such a good game"
      )

      before_delete_count = Review.count
      delete :destroy, params: { id: new_review.id }
      after_delete_count = Review.count

      expect(after_delete_count).to eq(before_delete_count - 1)
    end

    it "returns true when it removes the review" do
      sign_in user1

      new_review = Review.create(
        user: user1,
        game: game1,
        rating: 5,
        body: "Such a good game"
      )

      delete :destroy, params: { id: new_review.id }
      api_response = JSON.parse(response.body)

      expect(api_response['id']).to eq new_review.id
      expect(api_response['body']).to eq new_review[:body]
      expect(api_response['rating']).to eq new_review[:rating]
      expect(api_response['user_id']).to eq new_review.user.id    end
  end
end
