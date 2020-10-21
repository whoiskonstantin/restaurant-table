import React from 'react'
import PageButton from './PageButton'

const Pagination = ({ filteredData, setCurrentPage, currentPage }) => {
  const numberOfRestaurants = filteredData.length
  const numberOfPages = Math.ceil(numberOfRestaurants / 10)
  const pages = []
  for (let index = 1; index < numberOfPages + 1; index++) {
    pages.push(index)
  }

  return (
    <div className='container'>
      <div className='row'>
        {pages.map(pageNumber => (
          <PageButton
            key={pageNumber}
            pageNumber={pageNumber}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
      </div>
    </div>
  )
}
// <ul className='pagination pagination-lg'>
//   {pages.map(pageNumber => (
//     <li
//       className='page-item'
//       key={pageNumber}
//       onClick={() => setCurrentPage(pageNumber)}
//     >
//       {pageNumber}
//     </li>
//   ))}
// </ul>

export default Pagination
