import React from 'react';

import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';
import FirebaseFilterFamilyComponent from '../../../base-components/FirebaseFilterFamilyComponent';

const familiesFilter = () => {
  return (
    <FirebaseFilterFamilyComponent>
      {(collectionRef, filterName) =>
        <FirebaseFilterSuggestion collection={collectionRef}
          filterName={filterName} filterDisplayValue={(item) => item.name}
          filterValue={(item) => item.common_name}
          searchbarPlaceholder='Search for a family name...' />
      }
    </FirebaseFilterFamilyComponent>
  )
}

export default familiesFilter;
