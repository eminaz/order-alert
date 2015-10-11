// _id, name, restaurant_id
Categories = new Mongo.Collection('categories')

// _id, name, users_id
Restaurants = new Mongo.Collection('restaurants')

// _id, name, price(float), categories_id, image_url
Dishes = new Mongo.Collection('dishes')

// _id, restaurants_id, users_id, dishes: [{dishes_id, quantity(int)}], order_number, is_archived(bool),
// total_price, comment
Orders = new Mongo.Collection('orders')

// _id, users_id
Owners = new Mongo.Collection('owners')