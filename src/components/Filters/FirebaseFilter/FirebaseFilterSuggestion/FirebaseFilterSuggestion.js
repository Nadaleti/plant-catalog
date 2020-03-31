import React, {Fragment} from 'react'

const firebaseFilterSuggestion = (props) => {
  return (
    <Fragment>
      <input type="text"
          onChange={(event) => props.changed(event.target.value)} />
      {/* TODO: Recommended results for query */}
      {/* TODO: Handle select a result event */}
    </Fragment>
  )
}

export default firebaseFilterSuggestion;
