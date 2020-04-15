import React from 'react';

import Filters from '../../../../Filters/Filters';
import FamiliesFilter from '../../../../Filters/FirebaseFilter/FamiliesFilter/FamiliesFilter';
import GenusesFilter from '../../../../Filters/FirebaseFilter/GenusesFilter/GenusesFilter';

const plantCatalogDesktopFilters = (props) => {
  return (
    <Filters>
      <FamiliesFilter />
      <GenusesFilter family={props.selectedFilters.find((filter) => filter.filterName === 'family')} />
    </Filters>
  )
}

export default plantCatalogDesktopFilters;
