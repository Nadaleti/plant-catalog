import React, {Fragment, useContext, useState} from 'react';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CatalogContext from '../../../context/catalog-context';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';

import classes from './FilterMobile.module.scss';

const FilterMobile = (props) => {
  const [showSelectedFilter, setShowSelectedFilterState] = useState(false);
  const catalogContext = useContext(CatalogContext);

  const selectFilter = (displayValue, filterName, selectedFilter) => {
    catalogContext.selectFilter(displayValue, filterName, selectedFilter);
    toggleSelectedFilter();
  };

  const toggleSelectedFilter = () => {
    setShowSelectedFilterState(!showSelectedFilter);
  };

  return (
    <Fragment>
      <CatalogContext.Provider value={{selectFilter: selectFilter}}>
        <SideDrawer show={showSelectedFilter} title={props.filterName} close={toggleSelectedFilter}>
          {props.children}
        </SideDrawer>
      </CatalogContext.Provider>
      <div className={classes.FilterMobile} onClick={toggleSelectedFilter}>
        {props.filterName}
        <FontAwesomeIcon className={classes.RightArrow} icon={faChevronRight} />
      </div>
    </Fragment>
  )
}

export default FilterMobile;
