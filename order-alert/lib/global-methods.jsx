Meteor.methods({

	// Use Meteor methods if you need to call any sever method from the client

	addOrder() {
	},

	removeOrder() {
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

	addCategory() {
	},

	renameCategory() {
	},

	removeCategory() {
	},

	archiveOrder() {

	},

	beepUser() {
	},

});