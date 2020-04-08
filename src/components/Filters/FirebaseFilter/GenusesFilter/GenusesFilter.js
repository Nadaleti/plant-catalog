import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilter from '../FirebaseFilter';
import GenusesFilterSuggestion from './GenusesFilterSuggestion';

const collectionRef = firebase.firestore().collection('genuses');
const FILTER_NAME = 'genus';

const genusesFilter = (props) => {
  let suggestionFilter = <GenusesFilterSuggestion family={props.family} />
  let firebaseQuery = !!props.family ?
    collectionRef.where('family_id', '==', props.family.id) :
    collectionRef;

  return (
    <FirebaseFilter collection={firebaseQuery} filterName={FILTER_NAME}
      filterTitle='Genuses' suggestionFilter={suggestionFilter} />
  )
}

export default genusesFilter;
