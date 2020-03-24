import React from 'react';

import classes from './Toolbar.module.scss';
import Searchbar from '../Searchbar/Searchbar';

const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>logo</div>
      <div className={classes.Searchbar}>
        <Searchbar />  
      </div>
    </header>
  )
}

export default toolbar;
