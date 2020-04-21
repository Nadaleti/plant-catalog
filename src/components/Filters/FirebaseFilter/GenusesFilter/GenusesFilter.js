import React from 'react';

import firebase from '../../../../firebase';
import FirebaseFilter from '../FirebaseFilter';
import FilterGenusComponent from '../../../base-components/FilterGenusComponent';
import GenusesFilterSuggestion from './GenusesFilterSuggestion';

const collectionRef = firebase.firestore().collection('genuses');
const DISPLAY_PROPERTY = 'name';

const genusesFilter = (props) => {
  const family = props.selectedFilters.find((filter) => filter.filterName === 'family');

  let suggestionFilter = <GenusesFilterSuggestion family={family} />
  let firebaseQuery = !!family ?
    collectionRef.where('family_id', '==', family.value.id) :
    collectionRef;

  return (
    <FilterGenusComponent>
      {(filterName) =>
        <FirebaseFilter collection={firebaseQuery}
          displayProperty={DISPLAY_PROPERTY} filterName={filterName}
          filterTitle='Genuses' suggestionFilter={suggestionFilter} />
      }
    </FilterGenusComponent>
  )
}

export default genusesFilter;
