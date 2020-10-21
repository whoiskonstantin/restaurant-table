import React from 'react'
import states from '../utils/statesList'

const SelectState = ({ selectedState, onStateFilter, onFilter }) => {
  return (
    <form>
      <select
        name='states'
        value={selectedState}
        // onChange={event => onStateFilter(event)}
        onChange={event => onFilter('stateFilter', event)}
        id='state-selector'
      >
        {states.map(state => (
          <option key={state.name} value={state.abbreviation}>
            {state.name}
          </option>
        ))}
      </select>
    </form>
  )
}

export default SelectState
