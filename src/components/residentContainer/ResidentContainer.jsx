import React, { useEffect, useState } from 'react'
import { getResident } from '../../utils/callApi';
import { ResidentInfo } from '../residentInfo/ResidentInfo'

export const ResidentContainer = ({ name, numberOfResidents }) => {
	const [resident, setResident] = useState([]) 
	// {
	// 	residentName: '',
	// 	image: '',
	// 	status: '',
	// 	species: '',
	// 	gender: '',
	// 	origin: '',
	// 	episode: [],
	//   }



	useEffect(() => {
		//
		// 	numberOfResidents.map((url) => {
				
		// 			getResidentLocationRandom({
		// 				url,
		// 				setResidentLocationRandom,
		// 			})
				
		// 	});
		// }
		// if( name != '' && numberOfResidents.length > 0 )
		// 	console.log(numberOfResidents.length);
		// 	residentInfo({numberOfResidents, getResidentLocationRandom, setResidentLocationRandom});
		// numberOfResidents.map((URLResident) => {
		// 	getResident({URLResident, setResident, resident});
				
		// });
		if( name != '' && numberOfResidents.length > 0 ){
			const page = 1
			const amountByPage= 10
			const i0 = (page - 1)*amountByPage
			const i1 = page * amountByPage
			const r = numberOfResidents.slice(i0, i1).reduce((accumulator, currentValue) => accumulator +','+ currentValue).replaceAll('https://rickandmortyapi.com/api/character/','')
			console.log(r);
		}
	  }, [name]);
	//   let n = 'https://rickandmortyapi.com/api/character/'
	//   const y = numberOfResidents.map((URLResident) => {
	// 	  console.log(URLResident);
	// 	  return URLResident.replace(n, '');
	//   });
	//   console.log(y.join(','));
	//   }

	//   let n = 'https://rickandmortyapi.com/api/character/38'
	//   let y= 'https://rickandmortyapi.com/api/character/'
	//   let x = n.remplace(y);
	//   console.log(x);

	// const URLResidentLocationRandom = numberOfResidents[numLocationRandom];
	// const numLocationRandom =
    // Math.floor(Math.random() * (numberOfResidents.length - 0)) + 0;
	return (
		<div>
			<ResidentInfo />
		</div>

	)
}
