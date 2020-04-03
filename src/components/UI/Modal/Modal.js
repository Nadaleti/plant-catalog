import React, { memo } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import ModalOverlay from './ModalOverlay/ModalOverlay';

import classes from './Modal.module.scss';

const modal = (props) => {
  return (
    <ModalOverlay show={props.show}>
      <Backdrop show={props.show} clicked={props.closed} />
      <div
        className={classes.Modal}
        style={{
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </ModalOverlay>
  )
}

export default memo(modal);
