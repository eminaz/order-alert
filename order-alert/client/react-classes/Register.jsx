Register = React.createClass({
	handleRegister(event) {
		const email = React.findDOMNode(this.refs.email).value.trim();
		const password = React.findDOMNode(this.refs.password).value.trim();
		const passwordCheck = React.findDOMNode(this.refs.passwordCheck).value.trim();

		if (password != passwordCheck) {
			console.log('Password does not match!')
			throw new Meteor.Error('Password does not match!')
		}

		if (!email) {
			throw new Meteor.Error('Email is empty!')
		}

		Accounts.createUser({
			email: email,
			password: password
		});

		Router.go('/counter-mode');

	},

	render() {
		return (
			<div id='register-page'>
				<h1> Register</h1>
				<label htmlFor="email">Enter your email: </label>
				<input type="text" ref='email' placeholder='bob@example.com' /> 
				<br />       
				<label htmlFor="password">Enter your password: </label>
				<input type="password" ref='password' />
				<br />
				<label htmlFor="password">Enter your password again: </label>
				<input type="password" ref='passwordCheck' />
				<br />
				<button className="btn btn-info" type="button" onClick={this.handleRegister}>Register</button>
				<a href='/login'> I already have account</a>
				<br />
			</div>
			)
	}
})