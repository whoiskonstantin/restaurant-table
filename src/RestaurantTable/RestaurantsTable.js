import React, { useState, useEffect } from 'react'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import apiData from './components/Api'
import sort from './utils/sort'
import FilterNames from './components/FilterNames'

const RestaurantTable = () => {
  // State.
  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [nameInput, setNameInput] = useState('')

  const onNameInput = event => {
    const value = event.target.value
    setNameInput(value)
  }

  const searchName = event => {
    event.preventDefault()

    // If input field is empty return full list of restaturants.
    if (nameInput === '') {
      return setFilteredData(data)
    }

    // Create case insensitive reg expression for matching the input field's value with object's property.
    let re = new RegExp(nameInput, 'gi')

    const filteredData = data.filter(restaurant => {
      // Get an array of characters in the string by matching against the reg expression.
      const characterMatches =
        restaurant.name.match(re) ||
        restaurant.city.match(re) ||
        restaurant.genre.match(re)
      if (characterMatches !== null) {
        return true
      }
      return false
    })

    setFilteredData(filteredData)
  }

  useEffect(() => {
    const filteredData = apiData.map(restaurant => ({
      id: restaurant.id,
      name: restaurant.name,
      city: restaurant.city,
      state: restaurant.state,
      telephone: restaurant.telephone,
      genre: restaurant.genre,
    }))
    sort(filteredData)
    setData(filteredData)
    setFilteredData(filteredData)
  }, [])
  return (
    <>
      <FilterNames
        nameInput={nameInput}
        onNameInput={onNameInput}
        searchName={searchName}
      />
      <table>
        <TableHead />
        <TableBody data={filteredData} />
      </table>
    </>
  )
}

export default RestaurantTable
