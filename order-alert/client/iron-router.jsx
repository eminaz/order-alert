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







Template.layout.rendered = function() {
	React.render(<Settings />, document.getElementById('settingsReact'));
	Tracker.autorun(function() {
		var reactClass = Session.get('reactClass');
		if(reactClass === 'EditMenu') {
			React.render(<EditMenu />, document.getElementById('mainContentReact'));
		}
	});
}

