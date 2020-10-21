import React from 'react'

const TableBody = ({ filteredData, openedPage }) => {
  const numberOfRestaurants = filteredData.length
  const numberOfPages = Math.ceil(numberOfRestaurants / 10)

  console.log(numberOfPages)

  if (!filteredData) {
    return null
  }

  return (
    <tbody>
      {filteredData.map(restaurant => (
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
