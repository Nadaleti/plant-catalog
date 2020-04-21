import React from 'react';

import Filters from '../../../Filters/Filters';
import FamiliesFilter from '../../../Filters/FirebaseFilter/FamiliesFilter/FamiliesFilter';
import GenusesFilter from '../../../Filters/FirebaseFilter/GenusesFilter/GenusesFilter';

const plantCatalogDesktopFilters = (props) => {
  return (
    <Filters>
      <FamiliesFilter selectedFilters={props.selectedFilters} />
      <GenusesFilter selectedFilters={props.selectedFilters} />
    </Filters>
  )
}

export default plantCatalogDesktopFilters;
