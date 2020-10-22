import React from 'react'
import Pagination from './Pagination'
import TableBody from './TableBody'
import TableHead from './TableHead'

const Table = ({ filteredData, currentPage, setCurrentPage }) => {
  if (filteredData === null || filteredData.length === 0) {
    return (
      <h2>
        There are no search results. Try changing filter methods or searching
        for a different restaurant.
      </h2>
    )
  }

  return (
    <>
      <table className='table'>
        <TableHead />
        <TableBody currentPage={currentPage} filteredData={filteredData} />
      </table>
      <Pagination
        filteredData={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default Table
