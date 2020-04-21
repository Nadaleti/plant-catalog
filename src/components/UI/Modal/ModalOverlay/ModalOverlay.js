import React from 'react';

import classes from './ModalOverlay.module.scss';

const overlay = (props) => {
  const overlayStyle = {
    visibility: props.show ? 'visible' : 'hidden',
    opacity: props.show ? '1' : '0'
  };

  return (
    <div style={overlayStyle} className={classes.Overlay}>
      {props.children}
    </div>
  )
}

export default overlay;
