import React from 'react'

export const Pagination = ({ amountPage, changePageNumber }) => {

	let tagLiPagination = [];  
	for (let numPage = 0; numPage < amountPage; numPage++) {(

		tagLiPagination.push(	<li key={numPage + 1} className="page-item" >
									<a className="page-link" href="#" onClick={() =>changePageNumber(numPage + 1)}>{numPage + 1}</a>
  								</li>
							)
	)}

	return (
		<div>
  			<ul className="pagination justify-content-center">
    			<li className="page-item">
      				<p className="page-link">&laquo;</p>
    			</li>
    			{tagLiPagination}
    			<li className="page-item">
      				<p className="page-link">&raquo;</p>
    			</li>
  			</ul>
		</div>
	)
}
