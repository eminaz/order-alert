OrderItems = React.createClass({

	propTypes: {
    order: React.PropTypes.object.isRequired
  },

	render() {
		return (
			<div className='order-item'>
				<div className='item-description'>
					103. Chong Qing Chow Mein with Meat & Seafood
				</div>
				<div className='item-price'>
					CA$12.50
				</div>
			</div>
		)
	}
})