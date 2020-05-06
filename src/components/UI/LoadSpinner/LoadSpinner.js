import React from 'react';

import classes from './LoadSpinner.module.scss';

const loadSpinner = (props) => {
  return (
    <div style={{height: props.height, width: props.width}} className={classes.LoadSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default loadSpinner;
