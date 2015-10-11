RestaurantsClass = React.createClass({
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
			<div>
				<span>
					Restaurants
				</span>
				<ul className="list">
					{restaurants}
				</ul>
			</div>
		);
	}
});