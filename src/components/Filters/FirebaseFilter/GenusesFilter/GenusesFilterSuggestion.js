import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';

const collectionRef = firebase.firestore().collection('genuses');
const FILTER_NAME = 'genus';

const genusesFilter = (props) => {
  let firebaseQuery = !!props.family ?
    collectionRef.where('family_id', '==', props.family.id) :
    collectionRef;

  return (
    <FirebaseFilterSuggestion collection={firebaseQuery}
      filterName={FILTER_NAME}
      searchbarPlaceholder='Search for a genus name...' />
  )
}

export default genusesFilter;
