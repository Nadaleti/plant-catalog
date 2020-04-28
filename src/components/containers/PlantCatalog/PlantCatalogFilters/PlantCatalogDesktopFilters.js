import React from 'react';

import Filters from '../../../Filters/Filters';
import FamiliesFilter from '../../../Filters/FirebaseFilter/FamiliesFilter/FamiliesFilter';

const plantCatalogDesktopFilters = (props) => {
  return (
    <Filters>
      <FamiliesFilter selectedFilters={props.selectedFilters} />
    </Filters>
  )
}

export default plantCatalogDesktopFilters;
