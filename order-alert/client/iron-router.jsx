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






Template.layout.rendered = function() {
	React.render(<Settings />, document.getElementById('settingsReact'));
	Tracker.autorun(function() {
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
	});
}

