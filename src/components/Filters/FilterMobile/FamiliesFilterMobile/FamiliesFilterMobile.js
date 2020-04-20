import React from 'react';

import FamiliesFilterSuggestion from '../../FirebaseFilter/FamiliesFilter/FamiliesFilterSuggestion';
import FilterMobile from '../FilterMobile'; 

const FILTER_NAME = 'family';

const familiesFilterMobile = (props) => {
  const selectedFilter = props.selectedFilters
    .find((filter) => filter.filterName === FILTER_NAME);

  return (
    <FilterMobile filterTitle='Families'
      selectedFilterValue={!!selectedFilter ? selectedFilter.displayValue : null}>
      <FamiliesFilterSuggestion />
    </FilterMobile>
  )
}

export default familiesFilterMobile;
