Meteor.publish("categories", function () {
	return Categories.find({})
})

Meteor.publish("restaurants", function () {
	return Categories.find({})
})

Meteor.publish("categories", function () {
	return Categories.find({})
})

Meteor.publish("orders", function () {
	const user_id = Meteor.users() // Same as Meteor.users.findOne(Meteor.userId())
	return Orders.find({})
})

Meteor.methods({

	// Example Meteor method
	becomeOwner(secretKey) {
		if (secretKey != 'markIsCool') {
			Meteor.throws('Wrong password!')
		}
			
		// Make user owner if they are not owner yet
		if (Owners.find({user_id: Meteor.userId()}).count() == 0) {
			Owners.insert({user_id: Meteor.userId()})
		}
	}
});