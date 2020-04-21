import React, {Fragment, useContext, useState} from 'react';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CatalogContext from '../../../context/catalog-context';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';

import classes from './FilterMobile.module.scss';

const FilterMobile = (props) => {
  const [showFilterItems, setshowFilterItemsState] = useState(false);
  const catalogContext = useContext(CatalogContext);

  const selectFilter = (displayValue, filterName, selectedFilter) => {
    catalogContext.selectFilter(displayValue, filterName, selectedFilter);
    toggleShowFilterItems();
  };

  const toggleShowFilterItems = () => {
    setshowFilterItemsState(!showFilterItems);
  };

  return (
    <Fragment>
      <div className={classes.FilterMobile} onClick={toggleShowFilterItems}>
        {props.filterTitle}
        <span className={classes.SelectedFilter}>{props.selectedFilterValue}</span>
        <FontAwesomeIcon className={classes.RightArrow} icon={faChevronRight} />
      </div>
      <CatalogContext.Provider value={{selectFilter: selectFilter}}>
        <SideDrawer show={showFilterItems} title={props.filterTitle} close={toggleShowFilterItems}>
          {props.children}
        </SideDrawer>
      </CatalogContext.Provider>
    </Fragment>
  )
}

export default FilterMobile;
