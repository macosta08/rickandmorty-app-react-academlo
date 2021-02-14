import React from 'react'

export const SearchBox = ({setSearchInputLocation, searchInputLocation, handleSubmitLocation}) => {

	const handleInputLocation = ({target}) => {
		setSearchInputLocation(target.value);
	};

	return (
		<div className="navbar navbar-expand-md fixed-top navbar-dark bg-dark mb-4">
			<div className="container-fluid">
  			<a className="navbar-brand text-info" href="#">Rick and Morty</a>
    		<form className="form-inline my-2 my-lg-0" onSubmit={handleSubmitLocation}>
      			<input 
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
