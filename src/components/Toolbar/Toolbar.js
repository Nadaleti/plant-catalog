import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import SearchbarContext from '../../context/catalog-context';

import classes from './Toolbar.module.scss';

class Toolbar extends Component {
  state = {
    searchbarFocused: false
  }

  searchbarBlurHandler = () => {
    this.setState({searchbarFocused: false});
  }

  searchbarFocusHandler = () => {
    this.setState({searchbarFocused: true});
  }

  render() {
    let toolbarClasses = [classes.Toolbar];

    if (this.state.searchbarFocused) {
      toolbarClasses.push(classes.SearchbarActive);
    }

    return (
      <header className={toolbarClasses.join(' ')}>
      <SearchbarContext.Provider value={{submit: (event) => {event.preventDefault(); alert('something');}}} />
        <div className={classes.Logo}>logo</div>
        <div className={classes.Searchbar}>
          <Searchbar
            focused={this.searchbarFocusHandler}
            blur={this.searchbarBlurHandler} />
        </div>
      </header>
    )
  }
}

export default Toolbar;
