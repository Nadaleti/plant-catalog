import React from 'react';

import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';
import FirebaseFilterFamilyComponent from '../../../base-components/FirebaseFilterFamilyComponent';

const DISPLAY_PROPERTY = 'name';

const familiesFilter = () => {
  return (
    <FirebaseFilterFamilyComponent>
      {(collectionRef, filterName) =>
        <FirebaseFilterSuggestion collection={collectionRef}
          displayProperty={DISPLAY_PROPERTY} filterName={filterName}
          searchbarPlaceholder='Search for a family name...' />
      }
    </FirebaseFilterFamilyComponent>
  )
}

export default familiesFilter;
