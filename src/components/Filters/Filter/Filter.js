import React from 'react';

import classes from './Filter.module.scss';

const filter = (props) => {
  return (
    <div className={classes.Filter}>
      <label>{props.label}</label>
      {props.children}
    </div>
  )
}

export default filter;
