import React from 'react';

import GenusesFilterSuggestion from '../../FirebaseFilter/GenusesFilter/GenusesFilterSuggestion';
import FilterMobile from '../FilterMobile'; 

const FILTER_NAME = 'genus';

const genusesFilterMobile = (props) => {
  const selectedFilter = props.selectedFilters
    .find((filter) => filter.filterName === FILTER_NAME);

  return (
    <FilterMobile filterTitle='Genuses'
      selectedFilterValue={!!selectedFilter ? selectedFilter.displayValue : null}>
      <GenusesFilterSuggestion family={props.selectedFilters.find((filter) => filter.filterName === 'family')} />
    </FilterMobile>
  )
}

export default genusesFilterMobile;
