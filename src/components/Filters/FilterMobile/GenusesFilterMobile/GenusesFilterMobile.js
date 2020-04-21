import React from 'react';

import GenusesFilterSuggestion from '../../FirebaseFilter/GenusesFilter/GenusesFilterSuggestion';
import FilterMobile from '../FilterMobile';
import FilterGenusComponent from '../../../base-components/FilterGenusComponent';

const genusesFilterMobile = (props) => {
  return (
    <FilterGenusComponent>
      {(filterName) => {
        const selectedFilter = props.selectedFilters
          .find((filter) => filter.filterName === filterName);

        return <FilterMobile filterTitle='Genuses'
          selectedFilterValue={!!selectedFilter ? selectedFilter.displayValue : null}>
          <GenusesFilterSuggestion family={props.selectedFilters.find((filter) => filter.filterName === 'family')} />
        </FilterMobile>
      }}
    </FilterGenusComponent>
  )
}

export default genusesFilterMobile;
