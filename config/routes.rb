Rails.application.routes.draw do
  root 'homes#index'

  get "/games", to: 'homes#index'
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show]
    end
  end

  get "/games/:id", to: 'homes#show'
#   devise_for :users
#   namespace :api do
#     namespace :v1 do
#       resources :games, only: [:show]
#     end
#   end
end
