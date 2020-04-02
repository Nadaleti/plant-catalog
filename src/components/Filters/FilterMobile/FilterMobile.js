import React from 'react';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './FilterMobile.module.scss';

const filterMobile = (props) => {
  return (
    <div className={classes.FilterMobile}>
      {props.filterName}
      <FontAwesomeIcon className={classes.RightArrow} icon={faChevronRight} />
      {/* TODO: open new area to filter on sidebar */}
    </div>
  )
}

export default filterMobile;
