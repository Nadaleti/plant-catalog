import React, { Component } from 'react';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Searchbar from '../Searchbar/Searchbar';

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
        <div className={classes.Logo}>
          <FontAwesomeIcon icon={faSeedling} />
        </div>
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
