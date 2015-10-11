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
	}



});