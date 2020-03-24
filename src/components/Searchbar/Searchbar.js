import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Searchbar.module.scss';

const searchbar = (props) => {
  return (
    <form className={classes.Searchbar}>
      <input type="text"
        onFocus={props.focused} onBlur={props.blur}
        placeholder="Plant common or scientific name..." />
      
      <button className={classes.SearchButton} type="submit">
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
      </button>
    </form>
  )
}

export default searchbar;
