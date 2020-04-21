import React from 'react';

import FamiliesFilterSuggestion from './FamiliesFilterSuggestion';
import FirebaseFilter from '../FirebaseFilter';
import FirebaseFilterFamilyComponent from '../../../base-components/FirebaseFilterFamilyComponent';

const DISPLAY_PROPERTY = 'name';

const familiesFilter = (props) => {
  let suggestionFilter = <FamiliesFilterSuggestion />

  let getFirebaseFilter = (collectionRef, filterName) => <FirebaseFilter collection={collectionRef}
        displayProperty={DISPLAY_PROPERTY} filterName={filterName}
        filterTitle='Families' suggestionFilter={suggestionFilter} />;

  return (
    <FirebaseFilterFamilyComponent>
      {(collectionRef, filterName) => {
        const isAlreadySelected = !!props.selectedFilters.find((filter) => filter.filterName === filterName);

        return !isAlreadySelected ? getFirebaseFilter(collectionRef, filterName) : null
      }}
    </FirebaseFilterFamilyComponent>
  )
}

export default familiesFilter;
