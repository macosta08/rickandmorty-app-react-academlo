import React, { useEffect, useState } from 'react'
import { getResident } from '../../utils/callApi';
import { getMultipleCharactersUrl } from '../../utils/urlApi';
import { ResidentInfo } from '../residentInfo/ResidentInfo'

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
		<div className='container row' key={dataResident.id}><ResidentInfo dataResident={dataResident}/></div>
	  ));

	return (
		<div>
			{residents.length > 0 && residentInfo}
		</div>

	)
}
