import React from 'react';

import FamiliesFilterMobile from '../../../Filters/FilterMobile/FamiliesFilterMobile/FamiliesFilterMobile';
import FilterMobileWrapper from '../../../Filters/FilterMobile/FilterMobileWrapper/FilterMobileWrapper';
import SideDrawer from '../../../UI/SideDrawer/SideDrawer';

const plantCatalogMobileFilters = (props) => {
  return (
    <SideDrawer
      show={props.show}
      close={props.toggleFilters}
      title='Filter by'
      backdrop
    >
      <FilterMobileWrapper>
        <FamiliesFilterMobile selectedFilters={props.selectedFilters} />
      </FilterMobileWrapper>
    </SideDrawer>
  )
}

export default plantCatalogMobileFilters;
