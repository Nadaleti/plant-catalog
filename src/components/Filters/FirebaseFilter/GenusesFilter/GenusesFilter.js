import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilter from '../FirebaseFilter';
import GenusesFilterSuggestion from './GenusesFilterSuggestion';

const collectionRef = firebase.firestore().collection('genuses');
const FILTER_NAME = 'genus';
const DISPLAY_PROPERTY = 'name';

const genusesFilter = (props) => {
  const family = props.selectedFilters.find((filter) => filter.filterName === 'family');

  let suggestionFilter = <GenusesFilterSuggestion family={family} />
  let firebaseQuery = !!family ?
    collectionRef.where('family_id', '==', family.value.id) :
    collectionRef;

  return (
      <FirebaseFilter collection={firebaseQuery}
        displayProperty={DISPLAY_PROPERTY} filterName={FILTER_NAME}
        filterTitle='Genuses' suggestionFilter={suggestionFilter} />
  )
}

export default genusesFilter;
