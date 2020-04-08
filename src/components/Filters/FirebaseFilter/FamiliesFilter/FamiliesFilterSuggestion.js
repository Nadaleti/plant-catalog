import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';

const collectionRef = firebase.firestore().collection('families');
const FILTER_NAME = 'family';

const familiesFilter = () => {
  return (
    <FirebaseFilterSuggestion collection={collectionRef}
      filterName={FILTER_NAME}
      searchbarPlaceholder='Search for a family name...' />
  )
}

export default familiesFilter;
