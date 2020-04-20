import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilter from '../FirebaseFilter';
import FamiliesFilterSuggestion from './FamiliesFilterSuggestion';

const collectionRef = firebase.firestore().collection('families');
const FILTER_NAME = 'family';
const DISPLAY_PROPERTY = 'name';

const familiesFilter = (props) => {
  const isAlreadySelected = !!props.selectedFilters.find((filter) => filter.filterName === FILTER_NAME);
  let suggestionFilter = <FamiliesFilterSuggestion />

  return (
    !isAlreadySelected ?
      <FirebaseFilter collection={collectionRef}
        displayProperty={DISPLAY_PROPERTY} filterName={FILTER_NAME}
        filterTitle='Families' suggestionFilter={suggestionFilter} /> : null
  )
}

export default familiesFilter;
