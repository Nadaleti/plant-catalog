import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';

const collectionRef = firebase.firestore().collection('genuses');

const genusesFilter = () => {
  return (
    <FirebaseFilterSuggestion collection={collectionRef}
      searchbarPlaceholder='Search for a genus name...' />
  )
}

export default genusesFilter;
