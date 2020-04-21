import React from 'react';

import classes from './Filters.module.scss';

/**
 * Component to handle desktop and mobile filter visualization.
 * Each component which use Filters should declare its own filters using children props.
 */
const filters = (props) => {
  return (
    <div className={classes.Filters}>
      <h3>Filters</h3>
      {props.children}
    </div>
  )
}

export default filters;
