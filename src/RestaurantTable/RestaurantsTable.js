import React, { useState, useEffect } from 'react'
// Components.
import SearchField from './components/SearchField'
import SelectState from './components/SelectState'
import SelectGenre from './components/SelectGenre'
import Table from './components/Table'
// Utils.
import { fetchData } from './utils/api'
import { performStateFilter as filterRestaurants } from './utils/filters'

const RestaurantTable = () => {
  // STATE.
  // Source of truth for the table: raw data.
  const [data, setData] = useState(null)
  // API error message.
  const [fetchError, setFetchError] = useState(null)
  // Fetching state
  const [isFetching, setIsFetching] = useState(true)
  // Displayed data.
  const [filteredData, setFilteredData] = useState(null)
  // Value of selected filters.
  const [selectedState, setSelectedState] = useState('All')
  const [selectedGenre, setSelectedGenre] = useState('All')
  // Input field value.
  const [nameInput, setNameInput] = useState('')
  //  Current page number.
  const [currentPage, setCurrentPage] = useState(1)

  // Initial data fetching.
  useEffect(() => {
    fetchData(setData, setFilteredData, setFetchError, setIsFetching)
  }, [])

  const onFilter = (selectedFilter, event) => {
    setCurrentPage(1)
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
    setCurrentPage(1)
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

  return (
    <>
      <div className='restaurant-page'>
        <SearchField
          nameInput={nameInput}
          onNameInput={onNameInput}
          searchName={searchName}
        />
        <div className='container'>
          <div className='row'>
            <SelectState selectedState={selectedState} onFilter={onFilter} />
            <SelectGenre selectedGenre={selectedGenre} onFilter={onFilter} />
          </div>
        </div>
        {isFetching ? (
          <div className='loader'></div>
        ) : (
          <div className='container'>
            {fetchError ? (
              <h2>{fetchError}</h2>
            ) : (
              <Table
                filteredData={filteredData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default RestaurantTable
