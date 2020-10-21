import React, { useState, useEffect } from 'react'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import apiData from './components/Api'
import alphabeticalSort from './utils/sort'
import SearchField from './components/SearchField'
import SelectState from './components/SelectState'
import SelectGenre from './components/SelectGenre'
import { performStateFilter as filterRestaurants } from './utils/filters'
import Pagination from './components/Pagination'

const RestaurantTable = () => {
  // STATE.
  // Source of truth for the table: raw data.
  const [data, setData] = useState(null)
  // Displayed data.
  const [filteredData, setFilteredData] = useState(null)
  // Value of selected filters.
  const [selectedState, setSelectedState] = useState('All')
  const [selectedGenre, setSelectedGenre] = useState('All')
  // Input field value.
  const [nameInput, setNameInput] = useState('')

  const [openedPage, setOpenedPage] = useState(1)

  const onFilter = (selectedFilter, event) => {
    // Get the value of the 'selectedFilter' .
    const selectedOption = event.target.value
    // Determine if 'selectedFilter' refers to the states or genres, execute filtering, and setState for
    // selected filter and displayed data.
    if (selectedFilter === 'stateFilter') {
      setSelectedState(selectedOption)
      const filteredData = filterRestaurants(
        selectedOption,
        selectedGenre,
        data
      )
      setFilteredData(filteredData)
    } else if (selectedFilter === 'genreFilter') {
      setSelectedGenre(selectedOption)
      const filteredData = filterRestaurants(
        selectedState,
        selectedOption,
        data
      )
      setFilteredData(filteredData)
    }
  }

  const onNameInput = event => {
    const value = event.target.value
    setNameInput(value)
  }

  const searchName = event => {
    event.preventDefault()
    const dataAfterAppliedFilters = filterRestaurants(
      selectedState,
      selectedGenre,
      data
    )

    // If input field is empty return full list of filtered restaturants.
    if (nameInput === '') {
      return setFilteredData(dataAfterAppliedFilters)
    }

    // Create case insensitive reg expression for matching the input field's value
    // with object's property.
    let re = new RegExp(nameInput, 'gi')

    const filteredData = dataAfterAppliedFilters.filter(restaurant => {
      // Get an array of characters in the string by matching against the reg expression.
      const characterMatches =
        restaurant.name.match(re) ||
        restaurant.city.match(re) ||
        restaurant.genre.join(', ').match(re)
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
      genre: restaurant.genre.split(','),
    }))

    alphabeticalSort(filteredData)
    setData(filteredData)
    setFilteredData(filteredData)
  }, [])
  return (
    <>
      <SearchField
        nameInput={nameInput}
        onNameInput={onNameInput}
        searchName={searchName}
      />
      <SelectState selectedState={selectedState} onFilter={onFilter} />
      <SelectGenre selectedGenre={selectedGenre} onFilter={onFilter} />
      {filteredData === null || filteredData.length === 0 ? (
        <h2>
          There are no search results. Try changing filter methods or searching
          different restaurant
        </h2>
      ) : (
        <>
          <table>
            <TableHead />
            <TableBody openedPage={openedPage} filteredData={filteredData} />
          </table>
          <Pagination filteredData={filteredData} />
        </>
      )}
    </>
  )
}

export default RestaurantTable
