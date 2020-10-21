import React from 'react'

const TableBody = ({ filteredData, currentPage }) => {
  const pageSize = 10
  let startIndex = (currentPage - 1) * pageSize
  let endIndex = startIndex + pageSize

  if (!filteredData) {
    return null
  }

  return (
    <tbody>
      {filteredData.slice(startIndex, endIndex).map(restaurant => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.city}</td>
          <td>{restaurant.state}</td>
          <td>{restaurant.telephone}</td>
          <td>{restaurant.genre.join(', ')}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
