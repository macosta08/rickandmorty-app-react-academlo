import React from 'react'
import './residentInfo.css'

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
		<div className="card">
			<div className="additional">
				<div className="user-card">
					<img src={image} alt={name} />
				</div>      
			</div>
			<div className="general">
				<h4>{name}</h4>
				<p>Status: {status}</p>
    			<p>Specie: {species}</p>
				<p>Place of origin: {origin.name}</p>
				<p>Number of Episodes: {episode.length}</p>
			</div>
		</div>		
	)
}

