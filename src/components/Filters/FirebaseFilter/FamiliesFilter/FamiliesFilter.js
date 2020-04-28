import React from 'react';

import FamiliesFilterSuggestion from './FamiliesFilterSuggestion';
import FirebaseFilter from '../FirebaseFilter';
import FirebaseFilterFamilyComponent from '../../../base-components/FirebaseFilterFamilyComponent';

const familiesFilter = () => {
  let suggestionFilter = <FamiliesFilterSuggestion />

  let getFirebaseFilter = (collectionRef, filterName) =>
      <FirebaseFilter collection={collectionRef} filterName={filterName}
        filterTitle='Families' filterDisplayValue={(item) => item.name}
        filterValue={(item) => item.common_name} suggestionFilter={suggestionFilter} />;

  return (
    <FirebaseFilterFamilyComponent>
      {(collectionRef, filterName) => getFirebaseFilter(collectionRef, filterName)}
    </FirebaseFilterFamilyComponent>
  )
}

export default familiesFilter;
