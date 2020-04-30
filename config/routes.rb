Rails.application.routes.draw do
  root 'homes#index'  

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show, :create] do
        resources :owned_games, only: [:create, :show]
        resources :reviews, only: [:index, :create]
      end
      resources :reviews, only: [:edit, :update, :destroy]
      resources :users, only: [:show]
    end
  end

  get "/games", to: 'homes#index'
  get "/games/new", to: 'homes#index'
  get "/games/:id", to: 'homes#index'
  get "/games/:id/reviews/new", to: "homes#index"
  get "/reviews/:id/edit", to: "homes#index"
end
