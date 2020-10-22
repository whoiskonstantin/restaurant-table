import alphabeticalSort from './sort'

const { REACT_APP_AUTH } = process.env

export async function fetchData(
  setData,
  setFilteredData,
  setFetchError,
  setIsFetching
) {
  try {
    // Make the request.
    const response = await fetch(
      'https://code-challenge.spectrumtoolbox.com/api/restaurants',
      {
        headers: {
          Authorization: REACT_APP_AUTH,
        },
      }
    )
    const parsedResponse = await response.json()
    // Handle the response.
    if (response.status >= 200 && response.status < 300) {
      const filteredData = parsedResponse.map(restaurant => ({
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
      setIsFetching(false)
    } else {
      setFetchError('Sorry, restaurant data is not available at the moment.')
      setIsFetching(false)
    }
  } catch (error) {
    // Log API error here with something like sentry.io.
    setFetchError('Sorry, restaurant data is not available at the moment.')
    console.log('Error fetching user information', error)
    setIsFetching(false)
  }
}
