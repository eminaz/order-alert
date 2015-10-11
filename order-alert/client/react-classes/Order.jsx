Order = React.createClass({
	componentDidMount() {
		Meteor.subscribe('orders');
	},

	addOrder() {
		Meteor.call('addOrder', 100, 100, [{dish_id: 10, quantity: 1}], 1002, false, 10, 'make it not spicy')
	},

	render() {
		return (
			<div id='customer-order-page'>
				<div className='row' id="order">
					<div className="restaurant-info">
						<div className='header-background-image'></div>
						<div className="restaurant-details">
							<div className="star-icon"><img src="/img/star.png"/></div>
							<h1>AAA Restaurant</h1>
							<div className='phone-number-icon'><img src="/img/phone.png" /></div>
							<div className='phone-number'> 604-123-4567</div>
							<br/>
							<div className='location-icon'> <img src="/img/location.png"/> </div>
							<div className='location'>2806 Grandview Hwy, Vancouver, BC V5M 2C9</div>
							<p>Chinese</p>
						</div>
					</div>

					<div className="details">
						<div className='cash-only-icon'> <img src="/img/exclamation.png"/></div>
						<div className='cash-only'>This restaurant is for cash only</div>
						<br/>
						<div className='pickup-only-icon'> <img src="/img/exclamation.png"/></div>
						<div className='pickup-only'>This restaurant is only for pickup</div>
					</div>

					<div className='col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 category-header center'>
						<div className='row'>
							<div className='col-xs-3 dish-image'>
								<img src='img/dish.png'></img>
							</div>
							<div className='col-xs-9 dish-details'>
								<div className='dish-title'>
									Dish Name
								</div>
								<div className='dish-description'>
									Singapore Style Fried vermicelli with Meat & Spicy Shrimp
								</div>
								<div className='dish-quantity-selector'>
									<input value='1' />
								</div>
								<div className='dish-price blue'>
									CA$ 10.50
								</div>
							</div>
							<button onClick={this.addOrder}>Place Order</button> 
						</div>
					</div>

				</div>
			</div>
		)
	}
})