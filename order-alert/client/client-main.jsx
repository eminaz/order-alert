Meteor.startup(function () {
	// Populate html element with Id using given React class's render method
	React.render(<Login />, document.getElementById('login-page'))
	React.render(<EditMenu />, document.getElementById('edit-menu-page'))
})