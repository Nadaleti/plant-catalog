import React, { Component } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CatalogContext from '../../context/catalog-context';

import classes from './Searchbar.module.scss';

class Searchbar extends Component {
  plantName = null;

  static contextType = CatalogContext;
  
  inputChangeHandler = (event) => {
    this.context.updatePlantName(event.target.value);
  }

  searchSubmitHandler = (event) => {
    event.preventDefault();
    this.context.submit();
  }

  render() {
    return (
      <form className={classes.Searchbar} onSubmit={(event) => this.searchSubmitHandler(event)}>
        <input type="text"
          onFocus={this.props.focused} onBlur={this.props.blur}
          onInput={(event) => this.inputChangeHandler(event)}
          placeholder="Plant common or scientific name..." />

        <button className={classes.SearchButton} type="submit">
          <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
        </button>
      </form>
    )
  }
}

export default Searchbar;
