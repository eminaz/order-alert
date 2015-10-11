Order = React.createClass({
	render(){
		return(
			<div id='customer-order-page'>
				<div className='row' id="order">
					<div className="restaurant-info">
						<div className='header-background-image'></div>

					<div className="restaurant-details">
					<div className="star-icon"><img src="/img/star.png"/></div>
					<h1>AAA Restaurant</h1>
					<div className='phone-number-icon'> <img src="/img/phone.png" /> </div>
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

				</div>
			</div>
			)
	}
})