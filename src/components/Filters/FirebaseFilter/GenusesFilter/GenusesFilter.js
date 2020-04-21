import React from 'react';

import FirebaseFilter from '../FirebaseFilter';
import FirebaseFilterGenusComponent from '../../../base-components/FirebaseFilterGenusComponent';
import GenusesFilterSuggestion from './GenusesFilterSuggestion';

const DISPLAY_PROPERTY = 'name';

const genusesFilter = (props) => {
  const family = props.selectedFilters.find((filter) => filter.filterName === 'family');

  let suggestionFilter = <GenusesFilterSuggestion family={family} />

  return (
    <FirebaseFilterGenusComponent selectedFamily={family}>
      {(firebaseQuery, filterName) =>
        <FirebaseFilter collection={firebaseQuery}
          displayProperty={DISPLAY_PROPERTY} filterName={filterName}
          filterTitle='Genuses' suggestionFilter={suggestionFilter} />
      }
    </FirebaseFilterGenusComponent>
  )
}

export default genusesFilter;
