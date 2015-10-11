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

Router.route('/counter-mode', function() {
	Session.set('reactClass', 'CounterMode');
});





Template.layout.rendered = function() {
	Tracker.autorun(function() {
		var reactClass = Session.get('reactClass');
		if(reactClass === 'EditMenu') {
			React.render(<EditMenu />, document.getElementById('mainContentReact'));
		}
		if(reactClass === 'CounterMode') {
			React.render(<CounterMode />, document.getElementById('mainContentReact'));
		}
	});
}

