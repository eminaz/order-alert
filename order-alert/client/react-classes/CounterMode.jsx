CounterMode = React.createClass ({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

	// Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      orders: Orders.find({}).fetch(),
      currentUser: Meteor.user()
    }
  },

  // renderOrderItems() {
		// return <OrderItems order={this.order} />
  // },

  renderOrderTotalBill() {
  	return (			
  		<div className='bill-total'>
				Total:  CA$29.40
			</div>
		)
  },

  renderCustomerInfo() {
  	return (
			<div className='customer-info'>
				Customer Information: Eric-Kim 604-000-0000
			</div>
		)
  },

  renderSpecialInstruction() {
  	return (
  		<div className='special-instruction'>
				Special Instruction:  No spicy, thanks!
			</div>
		)
  },

  renderPaymentStatus() {
  	
  	return (
			<div className='payment-status'>
				Payment Status: <span className='green'> Received</span>
			</div>
		)
  },

  renderCounterOrderButtons() {
  	return (
  		<div className='counter-order-buttons'>
				<button> Archive  </button>
				<button> Send Alert </button>
			</div>
		)
  },

	render() {
		const renderOrderTotalBill = this.renderOrderTotalBill
		const renderCustomerInfo = this.renderCustomerInfo
		const renderSpecialInstruction = this.renderSpecialInstruction
		const renderPaymentStatus = this.renderPaymentStatus
		const renderCounterOrderButtons = this.renderCounterOrderButtons

		let counterOrderList = this.data.orders.map(function(order, index) {
			const userName = Meteor.users.findOne({_id: order.user_id}).user_name
			return (
				<div className='counter-order'>
					<div className='order-number'>
						Order: {order.order_number}
					</div>
					<div className='order-type blue'>
						Dine-in
					</div>
					<OrderItems order={order} />
					{renderOrderTotalBill()}
					{renderCustomerInfo()}
					{renderSpecialInstruction()}
					{renderPaymentStatus()}
					{renderCounterOrderButtons()}
				</div>
			)
		})

		return(
			<div className='container'>
				<div id='counter-mode-page'>

					<div className='row text-center light-bold' id='status-row'>
						<div className='col-xs-4 blue'>
							<div className='total-status-title'>Orders In Progress</div>
							<div className='huge bold'> 5 </div>
						</div>
						<div className='col-xs-4 red'>
							<div className='total-status-title'>Orders Waiting in Queue</div>
							<div className='huge bold'> 5 </div>
						</div>
						<div className='col-xs-4 green'>
							<div className='total-status-title'>Orders Archived</div>
							<div className='huge bold'> 5 </div>
						</div>
					</div>

					<div className='row' id='counter-mode-order-list-section'>
						<div className='col-xs-12 order-container'>
							
							{counterOrderList}

							<div className='counter-order'>
								<div className='order-number'>
									Order: 20151010039
								</div>
								<div className='order-type blue'>
									Take-out
								</div>
								<div className='order-item'>
									<div className='item-description'>
										103. Chong Qing Chow Mein with Meat & Seafood
									</div>
									<div className='item-price'>
										CA$12.50
									</div>
								</div>
								<div className='order-item'>
									<div className='item-description'>
										108. Shanghai Chow Mein with Shredded Pork
									</div>
									<div className='item-price'>
										CA$15.50
									</div>
								</div>
								<div className='order-item'>
									<div className='item-description'>
										GST
									</div>
									<div className='item-price'>
										CA$1.40
									</div>
								</div>
									<div className='bill-total'>
									Total:  CA$29.40
									</div>
								<div className='customer-info'>
									Customer Information: Eric-Kim 604-000-0000
								</div>
								<div className='special-instruction'>
									Special Instruction:  No spicy, thanks!
								</div>
								<div className='payment-status'>
									Payment Status: <span className='red'> Not Received</span>
								</div>

								<div className='counter-order-buttons'>
									<button> Archive  </button>
									<button> Send Alert </button>
								</div>
							</div>
						</div>
					</div>
						</div>
					</div>

		)
	}
})