require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :game do
    sequence(:name) {|n| "game#{n}"}
    description {'a game'}
    player_num {'2-8'}
  end

end
