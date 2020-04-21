import React from 'react';

import FirebaseFilterGenusComponent from '../../../base-components/FirebaseFilterGenusComponent';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';

const DISPLAY_PROPERTY = 'name';

const genusesFilter = (props) => {
  return (
    <FirebaseFilterGenusComponent>
      {(firebaseQuery, filterName) =>
        <FirebaseFilterSuggestion collection={firebaseQuery}
          displayProperty={DISPLAY_PROPERTY} filterName={filterName}
          searchbarPlaceholder='Search for a genus name...' />
      }
    </FirebaseFilterGenusComponent>
  )
}

export default genusesFilter;
