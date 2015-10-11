EditMenu = React.createClass({
	render() {
		return(
			<div className='row' id='edit-menu'>

				<header className='col-sm-12'> 
					<h1>Congee Noodle</h1>
				</header>

				<div className='col-sm-6 col-md-4' id="categories-section">
					<div className='big bold orange'> Category </div>
				</div>

				<div className='col-sm-6 col-md-8' id="dishes-section">
					<div className='big bold orange'>Dishes</div>
					<div className='add-dish'>
						<img className='img-rounded' src=''></img>
						<ul>
							<li><input className='add-dish-title'></input></li>
							<li><input className='add-dish-description'></input></li>
							<li><input className='add-dish-price'></input></li>
						</ul>
					</div>
					<div className='view-dish'>
						<img className='img-rounded' src=''></img>
						<div className='view-dish-title'></div>
						<div className='view-dish-description'></div>
						<div className='view-dish-price'></div>
					</div>
				</div>
			</div>
		)
	}
})