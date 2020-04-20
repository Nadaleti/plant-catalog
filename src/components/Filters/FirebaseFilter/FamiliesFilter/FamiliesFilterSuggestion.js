import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';

const collectionRef = firebase.firestore().collection('families');
const FILTER_NAME = 'family';
const DISPLAY_PROPERTY = 'name';

const familiesFilter = () => {
  return (
    <FirebaseFilterSuggestion collection={collectionRef}
      displayProperty={DISPLAY_PROPERTY} filterName={FILTER_NAME}
      searchbarPlaceholder='Search for a family name...' />
  )
}

export default familiesFilter;
