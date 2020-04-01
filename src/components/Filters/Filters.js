import React, { Fragment } from 'react';

import classes from './Filters.module.scss';

// Component to handle desktop and mobile visualization
// Each component which use Filters should declare its own filters
const filters = (props) => {
  return (
    <div className={classes.Filters}>
      <h3>Filters</h3>
      {props.children}
    </div>
  )
}

export default filters;
