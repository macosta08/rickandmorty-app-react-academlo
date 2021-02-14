import React, { useEffect, useState } from 'react'
import { getResident } from '../../utils/callApi';
import { getMultipleCharactersUrl } from '../../utils/urlApi';
import { Pagination } from '../pagination/Pagination';
import { ResidentInfo } from '../residentInfo/ResidentInfo';
import './residentContainer.css';

export const ResidentContainer = ({ name, arrayUrlResidents }) => {
	const [residents, setResidents] = useState([]);
	const [page, setPage] = useState(1);
	const [amountPage, setAmountPage] = useState(0);

	useEffect(() => {
		setResidents([]);
		setAmountPage(0);
		if( name != '' && arrayUrlResidents.length > 0 ){
			const URLResidents = getMultipleCharactersUrl(
				arrayUrlResidents,
				page
			);
			getResident({ URLResidents, setResidents });
			setAmountPage(Math.ceil(arrayUrlResidents.length/10));
		}
	  }, [name, page]);

	  const residentInfo = residents.map(dataResident => (
		<div  key={dataResident.id}><ResidentInfo dataResident={dataResident}/></div>
	  ));

	  const changePageNumber = (num) => {
		setPage(num);
	  }; 

	return (
		<div>
		<div className='card-container'>
			{residentInfo}
		</div>
			{amountPage > 1 && 
			<footer className='blog-footer justify-content-center'>
				<Pagination amountPage={amountPage} changePageNumber={changePageNumber}/>
			</footer>	
			}	
		
		</div>

	)
}
