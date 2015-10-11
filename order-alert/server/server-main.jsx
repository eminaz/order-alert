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