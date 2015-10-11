Router.configure({
  layoutTemplate: 'layout'
});

Router.onAfterAction(function() {
  this.render('sideMenu');
});

Router.route('/', function() {
	this.render('sideMenu');
});

Router.route('/edit-menu', function() {
	Session.set('reactClass', 'EditMenu');
});

Router.route('/order', function() {
	Session.set('reactClass', 'Order');
});

Router.route('/counter-mode', function() {
	Session.set('reactClass', 'CounterMode');
});

Router.route('/register', function() {
	Session.set('reactClass', 'Register');
});

Router.route('/login', function() {
	Session.set('reactClass', 'Login');
});




Template.layout.rendered = function() {
	React.render(<Settings />, document.getElementById('settingsReact'));
	Tracker.autorun(function() {
		var reactClass = Session.get('reactClass');
		React.render(React.createElement(eval(reactClass), null), document.getElementById('mainContentReact'));
	});
}

