Login = React.createClass({
	handleRegisterButton(event) {
	    Router.go('/register');
	},

	hangleLogin(event) {
		var email =  React.findDOMNode(this.refs.email).value.trim();
		var password = React.findDOMNode(this.refs.password).value.trim();
		Meteor.loginWithPassword(email, password, function(err, result) {
			if(!err) {
				Router.go('/');
			}
		});
	},

	render() {
		return (

			<div id='login-page'>
				<h1> Login</h1>
				<label htmlFor="email">Enter your email: </label>
				<input type="text" placeholder='bob@example.com' ref="email" /> 
				<br />       
				<label htmlFor="password">Enter your password: </label>
				<input type="password" ref="password" />
				<br />
				<button className="btn btn-info" type="button" onClick={this.hangleLogin}>Login</button>
				<button className="btn btn-warning" type="button" onClick={this.handleRegisterButton}> Register</button>
				<br />
			</div>
		)
	}
})