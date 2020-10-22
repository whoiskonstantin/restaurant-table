import React from 'react'
import states from '../utils/statesList'

const SelectState = ({ selectedState, onFilter }) => {
  return (
    <div className='col-sm'>
      <form>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='state-selector'>
              Filter States
            </span>
          </div>
          <select
            name='states'
            className='form-control'
            value={selectedState}
            onChange={event => onFilter('stateFilter', event)}
            id='state-selector'
          >
            {states.map(state => (
              <option key={state.name} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}

export default SelectState
