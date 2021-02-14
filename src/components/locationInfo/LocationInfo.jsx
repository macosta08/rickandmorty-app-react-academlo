import React from 'react'

export const LocationInfo = ({ name, type, dimension, arrayUrlResidents }) => {
	return (
		<div className="jumbotron" style={{backgroundImage: "url(/img/espacio.jpg)"}}>
  			<h1 className="display-5">{name}</h1>	
  			<hr className="my-4 text-info" />
			<p className="lead text-info">Type: {type}</p>
  			<p className="lead text-info">Dimension: {dimension}</p>
  			<p className="lead text-info">
			  Number of Residents: {arrayUrlResidents.length}
  			</p>
		</div>
	)
}
