// Function for filtering the states, takes three arguments: selected state, selected genre, raw data.
// As a second step after filtering the states it calls a function to filter genres.
export const performStateFilter = (selectedState, selectedGenre, data) => {
  if (selectedState === 'All' && selectedGenre === 'All') {
    return data
  } else if (selectedState === 'All') {
    return performGenreFilter(selectedGenre, data)
  }
  return performGenreFilter(
    selectedGenre,
    data.filter(restaurant => restaurant.state === selectedState)
  )
}

const performGenreFilter = (selectedGenre, data) => {
  if (selectedGenre === 'All') {
    return data
  }
  return data.filter(restaurant => restaurant.genre.includes(selectedGenre))
}
