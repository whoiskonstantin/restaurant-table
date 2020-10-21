import React from 'react'

const SearchField = ({ nameInput, onNameInput, searchName }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <form>
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control'
                value={nameInput}
                onChange={event => onNameInput(event)}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-outline-secondary'
                  onClick={event => searchName(event)}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchField
