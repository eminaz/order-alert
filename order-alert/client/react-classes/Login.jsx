Login = React.createClass({
	handleRegisterButton(event) {
	    FlowRouter.go('/register');
	},

	render() {
		return (

			<div id='login-page'>
				<h1> Login</h1>
				<label htmlFor="email">Enter your email: </label>
				<input type="text" placeholder='bob@example.com'/> 
				<br />       
				<label htmlFor="password">Enter your password: </label>
				<input type="password" />
				<br />
				<button className="btn btn-info" type="button">Login</button>
				<button className="btn btn-warning" type="button" onClick={this.handleRegisterButton}> Register</button>
				<br />
			</div>
		)
	}
})