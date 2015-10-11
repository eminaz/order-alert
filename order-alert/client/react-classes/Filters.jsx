Filters = React.createClass({

	render() {
		return (
			<ul className="list">
				<li className="item item-divider bold center"><span>Sort By</span></li>
				<li className="item item-divider">
					<span>Best Match</span>
					<i className="icon ion-checkmark-round align-right"></i>
				</li>
				<li className="item item-divider"><span>A-Z</span></li>
				<li className="item item-divider"><span>Distance</span></li>
				<li className="item item-divider bold center"><span>Filter By</span></li>
				<li className="item item-divider">
					<span>All</span>
					<i className="icon ion-checkmark-round align-right"></i>
				</li>
				<li className="item item-divider" onClick={this.logout}><span>Dine In</span></li>
				<li className="item item-divider" onClick={this.logout}><span>Take Out</span></li>
			</ul>
		);

	}

});