import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Searchbar.module.scss';

const searchbar = (props) => {
  return (
    <div className={classes.Searchbar}>
      <input type="text"
        onFocus={props.focused} onBlur={props.blur}
        placeholder="Search for some plant common name or scientific name..." />
      <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
    </div>
  )
}

export default searchbar;
