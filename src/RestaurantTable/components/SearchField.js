import React from 'react'

const SearchField = ({ nameInput, onNameInput, searchName }) => {
  return (
    <div>
      <form>
        <input
          type='text'
          value={nameInput}
          onChange={event => onNameInput(event)}
        />
        <button onClick={event => searchName(event)}>Search</button>
      </form>
    </div>
  )
}

export default SearchField
