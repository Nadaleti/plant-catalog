import React, { Component } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchContext from '../../context/search-context';

import classes from './Searchbar.module.scss';

class Searchbar extends Component {
  plantName = null;

  static contextType = SearchContext;
  
  inputChangeHandler = (event) => {
    this.plantName = event.target.value;
  }

  render() {
    return (
      <form className={classes.Searchbar} onSubmit={(event) => this.context.submit(event, this.plantName)}>
        <SearchContext.Provider value={{ plantName: this.plantName }} />
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
