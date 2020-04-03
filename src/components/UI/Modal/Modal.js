import React, { Fragment, memo } from 'react';

import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Fragment>
      {/* TODO: Change modal animation to fade-in / fade-out */}
      <Backdrop show={props.show} clicked={props.closed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </Fragment>
  )
}

export default memo(modal);
