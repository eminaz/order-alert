Settings = React.createClass({
	mixins: [ReactMeteorData],

  getMeteorData() {
  	var user = Meteor.user();
  	return {
  		user: user
  	}
  },

  login() {
  	Router.go('/login');
  },

	render() {
		if(this.data.user) {
			return (
				<ul className="list">
					<li className="item item-divider">
						<span>Status</span>
						<label className="toggle toggle-assertive toggle-small">
			        <input type="checkbox">
			          <div className="track">
			            <div className="handle"></div>
			          </div>
			        </input>
			      </label>
					</li>

					<li className="item item-divider"><span>All in Queue Orders</span></li>
					<li className="item item-divider"><span>All Archieved Orders</span></li>
					<li className="item item-divider"><span>Change Date</span></li>
					<li className="item item-divider"><span>Switch To Menu Editing</span></li>
					<li className="item item-divider"><span>Submit Feedback</span></li>
					<li className="item item-divider"><span>About</span></li>
					<li className="item item-divider log-out"><span>Log Out</span></li>
				</ul>
			);
		}
		else {
			return (
				<ul className="list">
					<li className="item item-divider log-in" onClick={this.login}><span>Log in</span></li>
				</ul>
			);
		}
	}
});