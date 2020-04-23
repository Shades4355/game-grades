require 'factory_bot'

FactoryBot.define do
  factory :game do
    sequence(:name) {|n| "game#{n}"}
    description {'a game'}
    player_num {'2-8'}
  end
end
