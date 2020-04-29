Rails.application.routes.draw do
  root 'homes#index'

  get "/games", to: 'homes#index'
  get "/games/new", to: 'homes#index'
  get "/games/:id", to: 'homes#index'
  get "/games/:id/reviews/new", to: "home#index"

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show, :create] do
        resources :reviews, only: [:create]
      end
    end
  end
end
