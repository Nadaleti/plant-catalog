import React from 'react';

import classes from './FilterMobileWrapper.module.scss';

const filterMobileWrapper = (props) => {
  return (
    <div className={classes.FilterMobileWrapper}>
      {props.children}
    </div>
  )
}

export default filterMobileWrapper;
