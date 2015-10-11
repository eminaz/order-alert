Router.configure({
  layoutTemplate: 'layout'
})

Router.onAfterAction(function() {
  this.render('sideMenu')
})

Router.route('/', function() {
	this.render('sideMenu')
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
Template.layout.rendered = function() {
	React.render(<Settings />, document.getElementById('settingsReact'))
	React.render(<Filters />, document.getElementById('filtersReact'))

	Tracker.autorun(function() {
<<<<<<< HEAD
		var reactClass = Session.get('reactClass');
		if(reactClass === 'EditMenu') {
			React.render(<EditMenu />, document.getElementById('mainContentReact'));
		}
		if(reactClass === 'CounterMode') {
			React.render(<CounterMode />, document.getElementById('mainContentReact'));
		}

		if(reactClass === 'Order') {
			React.render(<Order />, document.getElementById('mainContentReact'));
		}
=======
		var reactClass = Session.get('reactClass')
		React.render(React.createElement(eval(reactClass), null), document.getElementById('mainContentReact'))
>>>>>>> 54ead300b8649612f30087235d3a6fab3c2de752
	});
}

