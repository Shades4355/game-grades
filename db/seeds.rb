# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
settlers = Game.create(name: 'Settlers of Catan', description: "A fun-filled game about driving your friends villages to ruin through economic pressure",
player_num: '3 - 5')
Game.create(name: 'Uno', description: "A fun way to ruin friendships", player_num: "2-8")

u1 = User.create(email: "fake@fake.fake", password: "123456")

Review.create(rating: 4, body: "It's a game I like!", user: u1, game: settlers)