import React, { memo } from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          height: props.height,
          opacity: props.show ? '1' : '0'
        }}>
        <header className={classes.ModalHeader}>
          <h2 className={classes.ModalTitle}>{props.modalTitle}</h2>
          <FontAwesomeIcon icon={faTimes}
            className={classes.CloseIcon} onClick={props.closed} />
        </header>
        {props.children}
      </div>
    </ModalOverlay>
  )
}

export default memo(modal);
