import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilter from '../FirebaseFilter';
import GenusesFilterSuggestion from './GenusesFilterSuggestion';

const collectionRef = firebase.firestore().collection('genuses');

const genusesFilter = () => {
  let suggestionFilter = <GenusesFilterSuggestion />

  return (
    <FirebaseFilter collection={collectionRef}
      filterTitle='Genuses' suggestionFilter={suggestionFilter} />
  )
}

export default genusesFilter;
