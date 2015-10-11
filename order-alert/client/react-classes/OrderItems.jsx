OrderItems = React.createClass({

	propTypes: {
    targetOrder: React.PropTypes.object.isRequired
  },
	render() {
		const renderDishes = this.props.targetOrder.dishes.map(function(dish, index) {
			const dish_id = dish.dish_id
			const quantity = dish.quantity
			let dishDetails = Meteor.call('getDish', dish_id)
			if(!dishDetails) {
				dishDetails = {name: 'Dish Name', price: 10}
			}
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
			<div>
				{renderDishes}
			</div>
		)
	}
})