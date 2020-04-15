import React from 'react';

import FamiliesFilterSuggestion from '../../../../Filters/FirebaseFilter/FamiliesFilter/FamiliesFilterSuggestion';
import FilterMobile from '../../../../Filters/FilterMobile/FilterMobile';
import FilterMobileWrapper from '../../../../Filters/FilterMobile/FilterMobileWrapper/FilterMobileWrapper';
import GenusesFilterSuggestion from '../../../../Filters/FirebaseFilter/GenusesFilter/GenusesFilterSuggestion';
import SideDrawer from '../../../../UI/SideDrawer/SideDrawer';

const plantCatalogMobileFilters = (props) => {
  return (
    <SideDrawer
      show={props.show}
      close={props.toggleFilters}
      title='Filter by'
      backdrop
    >
      <FilterMobileWrapper>
        <FilterMobile filterName='Families'>
          <FamiliesFilterSuggestion />
        </FilterMobile>
        <FilterMobile filterName='Genuses'>
          <GenusesFilterSuggestion family={props.selectedFilters.find((filter) => filter.filterName === 'family')} />
        </FilterMobile>
      </FilterMobileWrapper>
    </SideDrawer>
  )
}

export default plantCatalogMobileFilters;
