import React from 'react'

export const ResidentInfo = ({dataResident}) => {
	const {
			name,
			image,
			status,
			species,
			gender,
			origin,
			episode,
		  } = dataResident; 

	return (
		<div className="card mb-3 col-3">
  			<h3 className="card-header">{name}</h3>
			<img src={image} alt={name}/>
  			<ul className="list-group list-group-flush">
   				<li className="list-group-item">Name: {status}</li>
    			<li className="list-group-item">Specie: {species}</li>
    			<li className="list-group-item">Gender: {gender}</li>
				<li className="list-group-item">Place of origin: {origin.name}</li>
				<li className="list-group-item">Number of Episodes: {episode.length}</li>
  			</ul>
		</div>
	)
}
