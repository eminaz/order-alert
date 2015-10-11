EditMenu = React.createClass({
	render() {
		return(
			<div className='container'>
				<div className='row' id='edit-menu'>

					<header className='col-xs-12'> 
						<h1>Congee Noodle</h1>
					</header>

					<div className='col-xs-6 col-sm-4' id="categories-section">
						<div className='big bold orange category-title'> Category </div>
						<div className='big bold category selected'> Noodle </div>
						<div className='big bold category'> Fried Rice </div>
						<div className='big bold category'> Hot Pot </div>
					</div>

					<div className='col-xs-6 col-sm-8' id="dishes-section">
						<div className='big bold orange'>Dishes</div>
						<div className='row'>
							<div className='col-xs-12 view-dish'>
								<div className='row'>
									<img className='col-xs-4 img-rounded' src=''></img>
									<div className='col-xs-7'>
										<div className='row'>
											<div className='col-xs-12 view-dish-title'>Sample Dish Title</div>
											<div className='col-xs-12 view-dish-description'>You will love this congee</div>
											<div className='col-xs-12 view-dish-price'>$7.00</div>
										</div>
									</div>
									<div className='col-xs-1'>
										<div className='row'>
											<div className='col-xs-12'><button>x</button></div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xs-12 add-dish'>
								<div className='row'>
									<img className='col-xs-4 img-rounded' src=''></img>
									<div className='col-xs-7'>
										<div className='row'>
											<input className='col-xs-12 add-dish-title' placeholder='Dish Title'></input>
											<input className='col-xs-12 add-dish-description' placeholder='Description'></input>
											<input className='col-xs-12 add-dish-price' placeholder='Dish Price'></input>
										</div>
									</div>
									<div className='col-xs-1'>
										<div className='row'>
											<div className='col-xs-12'><button>+</button></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})