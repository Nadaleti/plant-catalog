import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilter from '../FirebaseFilter';
import FamiliesFilterSuggestion from './FamiliesFilterSuggestion';

const collectionRef = firebase.firestore().collection('families');
const FILTER_NAME = 'family';

const familiesFilter = () => {
  let suggestionFilter = <FamiliesFilterSuggestion />

  return (
    <FirebaseFilter collection={collectionRef} filterName={FILTER_NAME}
      filterTitle='Families' suggestionFilter={suggestionFilter} />
  )
}

export default familiesFilter;
