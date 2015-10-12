OrderItems = React.createClass({

	propTypes: {
    targetOrder: React.PropTypes.object.isRequired
  },

  // mixins: [ReactMeteorData],

	// Loads items from the Tasks collection and puts them on this.data.tasks
	// getMeteorData() {
	// 	const dish_id = dish.dish_id
	// 	let dishDetails = Meteor.call('getDish', dish_id)
	// 	console.log(dishDetails)
	// 	// if(!dishDetails) {
	// 	// 	dishDetails = {name: 'Dish Name', price: 10}
	// 	// }
	// 	return {
	// 		dishDetails: dishDetails
	// 	}
	// },

	render() {
		const renderDishes = this.props.targetOrder.dishes.map(function(dishObject, index) {
			// const dish_id = dish.dish_id
			// const quantity = dish.quantity
			// var dishDetails = this.data.dishDetails;
			var dish = dishObject.dish;
			return (
				<div className='order-item'>
					<div className='item-description'>
						{dish.name}
					</div>
					<div className='item-price'>
						{dish.price}
					</div>
				</div>
			)
		})

		return (
			<div>
				{renderDishes}
			</div>
		)
	}
})

// DishDetails = React.createClass({

// 	render() {
// 		return(



// 		)
// 	}
// })