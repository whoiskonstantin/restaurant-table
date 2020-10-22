import React from 'react'

const PageButton = ({ pageNumber, currentPage, setCurrentPage }) => {
  if (pageNumber === currentPage) {
    return (
      <li
        className='page-item active'
        onClick={() => setCurrentPage(pageNumber)}
      >
        <span className='page-link'>{pageNumber}</span>
      </li>
    )
  }

  return (
    <li className='page-item' onClick={() => setCurrentPage(pageNumber)}>
      <span className='page-link'>{pageNumber}</span>
    </li>
  )
}

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

export default Pagination
