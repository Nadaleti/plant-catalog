import React from 'react';

import classes from './Filter.module.scss';

const filter = (props) => {
  return (
    <div className={classes.Filter}>
      <p className={classes.Title}>{props.label}</p>
      {props.children}
    </div>
  )
}

export default filter;
