Order = React.createClass({
	componentDidMount() {
		Meteor.subscribe('orders')
		Meteor.subscribe('dishes')
	},

	mixins: [ReactMeteorData],

	// Loads items from the Tasks collection and puts them on this.data.tasks
	getMeteorData() {
		var dishes = Dishes.find().fetch()
		return {
			dishes: dishes
		}
	},

	render() {
		var dishes = this.data.dishes.map(function(dish,index) {
			return <Dish dish={dish} />
		})

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
						{dishes}
						
					</div>

				</div>
			</div>
		)
	}
})

Dish = React.createClass({

	propTypes: {
    dish: React.PropTypes.object
  },

	addOrder() {
		Meteor.call('addOrder', 100, 100, [{dish: this.props.dish, quantity: 1}], 1002, false, 10, 'make it not spicy')
	},

	render() {

		var dish = this.props.dish

		return (
			<div className='row'>
				<div className='col-xs-3 dish-image'>
					<img src={dish.image_url}></img>
				</div>
				<div className='col-xs-9 dish-details'>
					<div className='dish-title'>
						{dish.name}
					</div>
					<div className='dish-description'>
						{dish.description}
					</div>
					<div className='dish-quantity-selector'>
						<input value='1' />
					</div>
					<div className='dish-price blue'>
						CA$ {dish.price}
					</div>
				</div>
				<button onClick={this.addOrder}>Place Order</button> 
			</div>
		)
	}
})
