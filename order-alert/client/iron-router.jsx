Router.configure({
  layoutTemplate: 'layout'
})

Router.onAfterAction(function() {
  this.render('sideMenu')
})

Router.route('/', function() {
	Session.set('reactClass', 'RestaurantsClass')
})

Router.route('/edit-menu', function() {
	Session.set('reactClass', 'EditMenu')
})

Router.route('/order', function() {
	Session.set('reactClass', 'Order')
})

Router.route('/counter-mode', function() {
	Meteor.subscribe('orders')
	Session.set('reactClass', 'CounterMode')
})

Router.route('/register', function() {
	Session.set('reactClass', 'Register')
})

Router.route('/login', function() {
	Session.set('reactClass', 'Login')
})

Router.route('/restaurants', function() {
	Session.set('reactClass', 'RestaurantsClass')
})

Template.layout.rendered = function() {
	React.render(<Settings />, document.getElementById('settingsReact'))
	React.render(<Filters />, document.getElementById('filtersReact'))

	Tracker.autorun(function() {
		var reactClass = Session.get('reactClass')
		React.render(React.createElement(eval(reactClass), null), document.getElementById('mainContentReact'));
	});
}

