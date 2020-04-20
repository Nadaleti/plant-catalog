import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';

const collectionRef = firebase.firestore().collection('genuses');
const FILTER_NAME = 'genus';
const DISPLAY_PROPERTY = 'name';

const genusesFilter = (props) => {
  let firebaseQuery = !!props.family ?
    collectionRef.where('family_id', '==', props.family.value.id) :
    collectionRef;

  return (
    <FirebaseFilterSuggestion collection={firebaseQuery}
      displayProperty={DISPLAY_PROPERTY} filterName={FILTER_NAME}
      searchbarPlaceholder='Search for a genus name...' />
  )
}

export default genusesFilter;
