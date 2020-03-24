import React from 'react';

import classes from './Toolbar.module.scss';

const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>logo</div>
      <div>searchbar</div>
    </header>
  )
}

export default toolbar;
