import React, {useState, Fragment} from 'react';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';

import classes from './FilterMobile.module.scss';

const FilterMobile = (props) => {
  const [showSelectedFilter, setShowSelectedFilterState] = useState(false);

  const toggleSelectedFilter = () => {
    setShowSelectedFilterState(!showSelectedFilter);
  };

  return (
    <Fragment>
      <SideDrawer show={showSelectedFilter} title={props.filterName} close={toggleSelectedFilter}>
        {props.children}
      </SideDrawer>
      <div className={classes.FilterMobile} onClick={toggleSelectedFilter}>
        {props.filterName}
        <FontAwesomeIcon className={classes.RightArrow} icon={faChevronRight} />
      </div>
    </Fragment>
  )
}

export default FilterMobile;
