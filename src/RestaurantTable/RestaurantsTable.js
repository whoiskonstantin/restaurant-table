import React, { useState, useEffect } from 'react'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import apiData from './components/Api'

const RestaurantTable = () => {
  // debugger
  const [data, setData] = useState(null)

  useEffect(() => {
    const filteredData = apiData.map(restaurant => ({
      id: restaurant.id,
      name: restaurant.name,
      city: restaurant.city,
      state: restaurant.state,
      telephone: restaurant.telephone,
      genre: restaurant.genre,
    }))
    setData(filteredData)
  }, [])
  return (
    <table>
      <TableHead />
      <TableBody data={data} />
    </table>
  )
}

export default RestaurantTable
