import React from 'react';

import FamiliesFilterSuggestion from './FamiliesFilterSuggestion';
import FilterFamilyComponent from '../../../base-components/FilterFamilyComponent';
import firebase from '../../../../firebase';
import FirebaseFilter from '../FirebaseFilter';

const collectionRef = firebase.firestore().collection('families');
const DISPLAY_PROPERTY = 'name';

const familiesFilter = (props) => {
  let suggestionFilter = <FamiliesFilterSuggestion />

  let getFirebaseFilter = (filterName) => <FirebaseFilter collection={collectionRef}
        displayProperty={DISPLAY_PROPERTY} filterName={filterName}
        filterTitle='Families' suggestionFilter={suggestionFilter} />;

  return (
    <FilterFamilyComponent>
      {(filterName) => {
        const isAlreadySelected = !!props.selectedFilters.find((filter) => filter.filterName === filterName);

        return !isAlreadySelected ? getFirebaseFilter(filterName) : null
      }}
    </FilterFamilyComponent>
  )
}

export default familiesFilter;
