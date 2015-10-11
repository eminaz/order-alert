RestaurantsClass = React.createClass({
	mixins: [ReactMeteorData],

  getMeteorData() {
  	Meteor.subscribe('restaurants');
  	var restaurants = Restaurants.find().fetch();
  	return {
  		restaurants: restaurants
  	}
  },

	render() {
		var restaurants = this.data.restaurants.map(function(restaurant, index) {
			return (
				<div key={index}>
					<div className='row'>
						<div className='col-xs-12 view-dish'>
							<div className='row restaurant-row'>
								<img className='col-xs-4 img-rounded' src={restaurant.image_url}></img>
								<div className='col-xs-7'>
									<div className='row'>
										<div className='col-xs-12 view-dish-title'>{restaurant.name}</div>
										<div className='col-xs-12 view-dish-description'>{restaurant.address}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div>
				<br /><br />
				<ul className="list">
					{restaurants}
				</ul>
			</div>
		);
	}
});