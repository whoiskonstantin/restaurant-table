import React from 'react'

// name, city, state, phone number, and genres

const TableBody = ({ data }) => {
  console.log(data)
  if (!data) {
    return null
  }
  return (
    <tbody>
      {data.map(restaurant => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.city}</td>
          <td>{restaurant.state}</td>
          <td>{restaurant.telephone}</td>
          <td>{restaurant.genre}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
