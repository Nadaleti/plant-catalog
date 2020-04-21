import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilterSuggestion from '../FirebaseFilterSuggestion/FirebaseFilterSuggestion';
import FilterGenusComponent from '../../../base-components/FilterGenusComponent';

const collectionRef = firebase.firestore().collection('genuses');
const DISPLAY_PROPERTY = 'name';

const genusesFilter = (props) => {
  let firebaseQuery = !!props.family ?
    collectionRef.where('family_id', '==', props.family.value.id) :
    collectionRef;

  return (
    <FilterGenusComponent>
      {(filterName) =>
        <FirebaseFilterSuggestion collection={firebaseQuery}
          displayProperty={DISPLAY_PROPERTY} filterName={filterName}
          searchbarPlaceholder='Search for a genus name...' />
      }
    </FilterGenusComponent>
  )
}

export default genusesFilter;
