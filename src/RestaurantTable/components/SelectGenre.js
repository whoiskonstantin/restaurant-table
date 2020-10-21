import React from 'react'
import genres from '../utils/genres'

const SelectGenre = ({ selectedGenre, onGenreFilter, onFilter }) => {
  return (
    <form>
      <select
        name='genres'
        value={selectedGenre}
        // onChange={event => onGenreFilter(event)}
        onChange={event => onFilter('genreFilter', event)}
        id='genre-selector'
      >
        {genres.map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </form>
  )
}

export default SelectGenre
