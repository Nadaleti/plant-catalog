import React from 'react';

import FamiliesFilterSuggestion from '../../FirebaseFilter/FamiliesFilter/FamiliesFilterSuggestion';
import FilterFamilyComponent from '../../../base-components/FilterFamilyComponent';
import FilterMobile from '../FilterMobile'; 

const familiesFilterMobile = (props) => {
  return (
    <FilterFamilyComponent>
      {(filterName) => {
        let selectedFilter = props.selectedFilters
          .find((filter) => filter.filterName === filterName);

        return <FilterMobile filterTitle='Families'
          selectedFilterValue={!!selectedFilter ? selectedFilter.displayValue : null}>
          <FamiliesFilterSuggestion />
        </FilterMobile>
      }}
    </FilterFamilyComponent>
  )
}

export default familiesFilterMobile;
