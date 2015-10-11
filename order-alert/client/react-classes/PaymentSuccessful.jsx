PaymentSuccessful= React.createClass({
	render(){
		return(
			<div id="payment">
			<div className="success">
			<div className="check-icon"><img src="/img/success.png"/></div>
			<div className="orange pay-success">Payment Sucessful</div>
			<div className="processed">Your payment has been processed!</div>
			<hr/>
			</div>
			<div className="order-info">
			<div className="ordered-from">Ordered From: AAA Restaurant</div>
			<br/>
			<div className="order-num-time">Order Number: 20151011008
			<br/>
			Estimated Time: 40 mins
			<br/>
			<br/>
			</div>
			</div>

			<div className="phone-loc">
			<div className="phone-number-icon"> <img src="/img/phone.png"/></div>
			<div className="phone-number">604-123-4567</div>
			<br/>
			<div className="location-icon"> <img src="/img/location.png"/></div>
			<div className="location">2806 Grandview Hwy, Vancouver, BC V5M 2C9</div>
			</div>
			<div className="map"><img src="/img/map.png"/></div>

			</div>
		)
	}
})
