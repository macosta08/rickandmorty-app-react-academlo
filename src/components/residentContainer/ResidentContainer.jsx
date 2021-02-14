import React, { useEffect, useState } from 'react'
import { getResident } from '../../utils/callApi';
import { getMultipleCharactersUrl } from '../../utils/urlApi';
import { ResidentInfo } from '../residentInfo/ResidentInfo';
import './residentContainer.css';

export const ResidentContainer = ({ name, arrayUrlResidents }) => {
	const [residents, setResidents] = useState([]);


	useEffect(() => {
		
		if( name != '' && arrayUrlResidents.length > 0 ){
			const URLResidents = getMultipleCharactersUrl(
				arrayUrlResidents,
				1
			);
			getResident({ URLResidents, setResidents });
		}
	  }, [name]);

	  const residentInfo = residents.map(dataResident => (
		<div  key={dataResident.id}><ResidentInfo dataResident={dataResident}/></div>
	  ));

	return (
		<div className='card-container'>
			{residents.length > 0 && residentInfo}
		</div>

	)
}
