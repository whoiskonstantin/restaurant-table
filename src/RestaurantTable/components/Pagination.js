import React from 'react'

const Pagination = ({ filteredData, setCurrentPage }) => {
  const numberOfRestaurants = filteredData.length
  const numberOfPages = Math.ceil(numberOfRestaurants / 10)
  const pages = []
  for (let index = 1; index < numberOfPages + 1; index++) {
    pages.push(index)
  }

  return (
    <ul>
      {pages.map(pageNumber => (
        <li key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>
          {pageNumber}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
