import React from 'react'
import "./searchBox.css"
export const SearchBox = ({setSearchInputLocation, searchInputLocation, handleSubmitLocation, locationNames}) => {

	const handleInputLocation = ({target}) => {
		setSearchInputLocation(target.value);
	};

	const datalistLocations = locationNames.map(loc => (
		<option key={loc} value={loc} />
	));
	
	return (
		<div className="navbar navbar-expand-md fixed-top navbar-dark bg-dark mb-4">
			<div className="container-fluid">
  			<a className="navbar-brand text-info" href="#">Rick and Morty</a>
    		<form className="form-inline my-2 my-lg-0" onSubmit={handleSubmitLocation}>
							
				<datalist id="locations">
					{datalistLocations}
				</datalist>
				<input 
					list="locations"
					className="form-control mr-sm-2"
					type="text" placeholder="Type a Location"
					value={searchInputLocation}
					onChange={handleInputLocation}
				/>
				
      			<button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
    		</form>
			</div>
		</div>
	)
}
