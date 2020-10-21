import React from 'react'

const FilterNames = ({ nameInput, onNameInput, searchName }) => {
  return (
    <div>
      <form action=''>
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

export default FilterNames
