Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  get "/games", to: 'homes#index'
  get "/games/new", to: 'homes#index'
  get "/games/:id", to: 'homes#index'
  get "/users/:id", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show, :create]
      resources :users, only: [:show]
    end
  end
end
