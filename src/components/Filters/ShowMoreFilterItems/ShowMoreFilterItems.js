import React, { Component, Fragment } from 'react';

import Modal from '../../UI/Modal/Modal';

const MOBILE_WIDTH = 600;

export default class ShowMoreFilterItems extends Component {
  state = {
    isMobile: window.innerWidth <= MOBILE_WIDTH
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResizeHandler);
  }

  windowResizeHandler = () => {
    this.setState((prevState) => {
      let isMobile = window.innerWidth <= MOBILE_WIDTH;
      if (prevState.isMobile !== isMobile) {
        return { isMobile: isMobile }
      }
    });
  }

  render() {
    let moreFilterItems =
      <Modal show={this.props.showMoreFilterItems}
        closed={this.props.hideMoreFilterItems}>
        {this.props.children}
      </Modal>;

    if (this.state.isMobile) {
      moreFilterItems = null;
    }

    return (<Fragment>{moreFilterItems}</Fragment>);
  }
}
