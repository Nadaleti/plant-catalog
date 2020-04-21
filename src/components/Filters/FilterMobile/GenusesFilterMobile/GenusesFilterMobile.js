import React from 'react';

import FilterMobile from '../FilterMobile';
import FilterGenusComponent from '../../../base-components/FilterGenusComponent';
import GenusesFilterSuggestion from '../../FirebaseFilter/GenusesFilter/GenusesFilterSuggestion';

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
