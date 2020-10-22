import React, { useState } from 'react'

const TableRow = ({ restaurant }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <tr onClick={() => setIsVisible(!isVisible)}>
        <td>{restaurant.name}</td>
        <td>{restaurant.city}</td>
        <td>{restaurant.state}</td>
        <td>{restaurant.telephone}</td>
        <td>{restaurant.genre.join(', ')}</td>
      </tr>
      <tr
        className={isVisible ? 'visible-row' : 'invisible-row'}
        onClick={() => setIsVisible(!isVisible)}
      >
        <td className='no-border' colSpan='5'>
          <p className='bold-details'>
            Address: <span className='details'>{restaurant.address1}</span>
          </p>
          <p className='bold-details'>
            Zipcode: <span className='details'>{restaurant.zip}</span>
          </p>
          <p className='bold-details'>
            Latitude: <span className='details'>{restaurant.lat}</span>
          </p>
          <p className='bold-details'>
            Longtitude: <span className='details'>{restaurant.long}</span>
          </p>
          <p className='bold-details'>
            Website:{' '}
            <span className='details'>
              <a href={restaurant.website}>{restaurant.website}</a>
            </span>
          </p>
          <p className='bold-details'>
            Hours: <span className='details'>{restaurant.hours}</span>
          </p>
          <p className='bold-details'>
            Attire: <span className='details'>{restaurant.attire}</span>
          </p>
        </td>
      </tr>
    </>
  )
}

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
        <TableRow key={restaurant.id} restaurant={restaurant} />
      ))}
    </tbody>
  )
}

export default TableBody
