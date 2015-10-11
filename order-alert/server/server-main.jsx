Meteor.publish("categories", function () {
	return Categories.find({})
})

Meteor.publish("restaurants", function () {
	return Restaurants.find({})
})

Meteor.publish("dishes", function () {
	return Dishes.find({})
})

Meteor.publish("orders", function () {
	const user_id =  this.userId // Same as Meteor.users.findOne(Meteor.userId())
	return Orders.find({})
})

Meteor.methods({

	becomeOwner(secretKey) {
		if (secretKey != 'markIsCool') {
			throw new Meteor.Error('Wrong password!')
		}
		if (Owners.find({user_id: this.userId}).count() == 0) {
			Owners.insert({user_id: this.userId})
		}
	},

	seedRestaurants() {
		 Restaurants.remove({});
		 Meteor.call('addRestaurant', 'Sushi', '2gnQfFNxYyKf2QAoj', 'http://s3-media3.fl.yelpcdn.com/bphoto/PykFEpoVPPQUoL-Qv7QeLA/o.jpg', '152 Lonsdale Ave North Vancouver, BC V7M 2E8 Canada')
     Meteor.call('addRestaurant', 'Ask For Luigi', '2gnQfFNxYyKf2QAoj', 'http://s3-media3.fl.yelpcdn.com/bphoto/fSW7lWh6S11RnVI5jsFxFQ/ls.jpg', '305 Alexander Street Vancouver, BC V6A 1C4 Canada')  
	   Meteor.call('addRestaurant', 'Blenz Coffee', '2gnQfFNxYyKf2QAoj', 'http://s3-media1.fl.yelpcdn.com/bphoto/JnNNmOlq0bj4AB4K65U4AQ/o.jpg', '97 W 2nd Avenue Vancouver, BC V5Y 1B3 Canada')  
	}



});