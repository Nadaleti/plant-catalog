import React, { Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './SideDrawer.module.scss';

const sideDrawer = (props) => {
  let sideDrawerClasses = [classes.SideDrawer];

  if (props.show) {
    sideDrawerClasses.push(classes.Opened);
  } else {
    sideDrawerClasses.push(classes.Closed);
  }

  let backdrop = null;
  if (props.backdrop) {
    backdrop = <Backdrop show={props.show} clicked={props.close} />
  }

  return (
    <Fragment>
      {backdrop}
      <div className={sideDrawerClasses.join(' ')}>
        <header>
          <FontAwesomeIcon className={classes.ArrowIcon}
            icon={faArrowLeft} onClick={props.close} />
          <h3 className={classes.Title}>{props.title}</h3>
        </header>
        {props.children}
      </div>
    </Fragment>
  )
}

export default sideDrawer;
