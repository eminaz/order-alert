OrderItems = React.createClass({

	propTypes: {
    targetOrder: React.PropTypes.object.isRequired
  },
	render() {
		const renderDishes = this.props.targetOrder.dishes.map(function(dish, index) {
			const dish_id = dish.dish_id
			const quantity = dish.quantity
			const dishDetails = Meteor.call('getDish', dish_id)
			console.log(dishDetails)

			return (
				<div className='order-item'>
					<div className='item-description'>
						{dishDetails.name}
					</div>
					<div className='item-price'>
						{dishDetails.price}
					</div>
				</div>
			)
		})

		return (
			{renderDishes}
		)
	}
})