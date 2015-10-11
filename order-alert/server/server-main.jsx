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
	const user_id = Meteor.users() // Same as Meteor.users.findOne(Meteor.userId())
	return Orders.find({})
})

Meteor.methods({

	'becomeOwner' : function(secretKey) {
		if (secretKey != 'markIsCool') {
			Meteor.throws('Wrong password!')
		}
			
		// Make user owner if they are not owner yet
		if (Owners.find({user_id: Meteor.userId()}).count() == 0) {
			Owners.insert({user_id: Meteor.userId()})
		}
	}



});