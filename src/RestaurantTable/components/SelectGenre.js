import React from 'react'
import genres from '../utils/genres'

const SelectGenre = ({ selectedGenre, onFilter }) => {
  return (
    <div className='col-sm'>
      <form>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='genre-selector'>
              Filter Genres
            </span>
          </div>
          <select
            name='genres'
            className='form-control'
            value={selectedGenre}
            onChange={event => onFilter('genreFilter', event)}
            id='genre-selector'
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}

export default SelectGenre
