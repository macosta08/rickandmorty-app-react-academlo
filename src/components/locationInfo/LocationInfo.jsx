import React from 'react'

export const LocationInfo = ({ name, type, dimension, numberOfResidents }) => {
	return (
		<div className="jumbotron">
  			<h1 className="display-3">{name}</h1>
  			<hr className="my-4" />
			<p className="lead">Type : {type}</p>
  			<p className="lead">Dimension : {dimension}</p>
  			<p className="lead">
			  Number Of Residents : {numberOfResidents.length}
  			</p>
		</div>
	)
}
