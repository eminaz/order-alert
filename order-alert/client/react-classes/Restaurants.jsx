Restaurants = React.createClass({
	mixins: [ReactMeteorData],

  getMeteorData() {
  	var restaurants = Restaurants.find().fetch();
  	return {
  		restaurants: restaurants
  	}
  },

	render() {
		var restaurants = this.data.restaurants.map(function(restaurant, index) {
			return (
				<li className="item item-divider">
					{restaurant.name}
				</li>
			);
		});

		return (
			<ul className="list">
				{restaurants}
			</ul>
		);
	}
});