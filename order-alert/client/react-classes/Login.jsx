Login = React.createClass({
	render() {
		return (

			<div id='login-page'>
				<h1> Login</h1>
				<label htmlfor="username">Enter your ID: </label>
				<input type="text" /> 
				<br />       
				<label htmlfor="password">Enter your password: </label>
				<input type="text" />
				<br />
				<button className="btn btn-info" type="button">Login</button>
				<button className="btn btn-warning" type="button"> Register</button>
				<br />
			</div>
		)
	}
})