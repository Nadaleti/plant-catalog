import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';
import FilterFamilyComponent from '../../../base-components/FilterFamilyComponent';

const collectionRef = firebase.firestore().collection('families');
const DISPLAY_PROPERTY = 'name';

const familiesFilter = () => {
  return (
    <FilterFamilyComponent>
      {(filterName) =>
        <FirebaseFilterSuggestion collection={collectionRef}
          displayProperty={DISPLAY_PROPERTY} filterName={filterName}
          searchbarPlaceholder='Search for a family name...' />
      }
    </FilterFamilyComponent>
  )
}

export default familiesFilter;
