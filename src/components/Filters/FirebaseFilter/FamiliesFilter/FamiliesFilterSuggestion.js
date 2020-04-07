import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';

const collectionRef = firebase.firestore().collection('families');

const familiesFilter = () => {
  return (
    <FirebaseFilterSuggestion collection={collectionRef}
      searchbarPlaceholder='Search for a family name...' />
  )
}

export default familiesFilter;
