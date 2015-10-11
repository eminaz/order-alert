Meteor.methods({

	// Use Meteor methods if you need to call any sever method from the client

	addOrder(resturant_id, user_id, dishes, order_number, isArchived, total_price, comment) {
		console.log('addOrder')
		var date = Date.now();
		var order = {
			resturant_id: resturant_id,
			user_id: user_id,
			dishes: dishes,
			order_number: order_number,
			isArchived: isArchived,
			total_price: total_price,
			comment: comment,
			date: date
		};
		// if(Orders.find({resturant_id: resturant_id, user_id: user_id, date:date}).count() === 0) {
			Orders.insert(order);
		// }
	},

	removeOrder(_id) {
		Orders.remove({_id: _id});
	},

	addDish(name, price, category_id, image_url, resturant_id) {
		var dish = {
			name: name,
			price: price,
			category_id: category_id,
			image_url: image_url,
			resturant_id: resturant_id
		};
		if(Dishes.find({name: name, resturant_id: resturant_id}).count() === 0) {
			Dishes.insert(dish);
		}
	},

	updateDish() {
	},

	removeDish(_id) {
		Dishes.remove({_id: _id});
	},

	addCategory(name, resturant_id) {
		var category = {
			name: name,
			resturant_id: resturant_id
		};
		if(Categories.find({name: name, resturant_id: resturant_id}).count() === 0) {
			Categories.insert(category);
		}
	},

	renameCategory(new_name, category_id) {
		Categories.update({
			category_id: category_id
		}, {
			$set: {
				name: new_name
			}
		});
	},

	removeCategory(_id) {
		Categories.remove({_id: _id});
	},

	archiveOrder() {

	},

	beepUser() {
	},

	addRestaurant(name, owner_id) {
		var resturant = {
			name: name,
			owner_id: owner_id
		};
		if(Restaurants.find({name: name, owner_id: owner_id}).count() === 0) {
			Restaurants.insert(resturant);
		}
	},

	removeRestaurant(_id) {
		Restaurants.remove({_id: _id});
	}

	

});