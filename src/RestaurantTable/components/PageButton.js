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

export default PageButton
