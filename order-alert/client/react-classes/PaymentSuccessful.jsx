PaymentSuccessful= React.createClass({
	render(){
		return(
			<div id="payment">
			<div className="success">
			<div className="check-icon"><img src="/img/success.png"/></div>
			Payment Sucessful
			<br/>
			Your payment has been processed!
			<br/>
			<hr/>
			</div>
			<div className="order-info">
			Ordered From: AAA Restaurant
			<br/>
			Order Number:20151011008
			<br/>
			Estimated Time: 40 mins
			<br/>
			<br/>
			</div>

			<div className="phone-number-icon"> <img src="/img/phone.png"/></div>
			<div className="phone-number">604-123-4567</div>
			<br/>
			<div className="location-icon"> <img src="/img/location.png"/></div>
			<div className="location">2806 Grandview Hwy, Vancouver, BC V5M 2C9</div>
			<div className="map"><img src="/img/map.png"/></div>

			</div>
		)
	}
})
