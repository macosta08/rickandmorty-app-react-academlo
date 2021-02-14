import React from 'react'

export const SearchBox = ({setSearchInputLocation, searchInputLocation, handleSubmitLocation}) => {

	const handleInputLocation = ({target}) => {
		setSearchInputLocation(target.value);
	};

	return (
		<div className="navbar navbar-expand-lg navbar-dark bg-dark">
  			<a className="navbar-brand" href="#">Rick and Morty</a>
    		<form className="form-inline my-2 my-lg-0" onSubmit={handleSubmitLocation}>
      			<input 
					className="form-control mr-sm-2"
					type="text" placeholder="Search"
					value={searchInputLocation}
					onChange={handleInputLocation}
				/>
      			<button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    		</form>
		</div>
	)
}
