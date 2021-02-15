import React from 'react'

export const Pagination = ({ amountPage, changePageNumber }) => {

	let tagLiPagination = [];  
	for (let numPage = 1; numPage <= amountPage; numPage++) {(
		tagLiPagination.push(	
			<li key={numPage} className="page-item" >
				<a className="page-link" 
				   href="#" 
				   onClick={()=>changePageNumber(numPage)}>{numPage}
				</a>
  			</li>
							)
	)}

	return (
  			<ul className="pagination justify-content-center">
    			<li className="page-item">
      				<p className="page-link">&laquo;</p>
    			</li>
    			{tagLiPagination}
    			<li className="page-item">
      				<p className="page-link">&raquo;</p>
    			</li>
  			</ul>
	)
}
