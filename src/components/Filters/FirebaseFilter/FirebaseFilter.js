import React, { Component, Fragment } from 'react';

import Filter from '../Filter/Filter';
import Modal from '../../UI/Modal/Modal';

import classes from './FirebaseFilter.module.scss';

const NUMBER_OF_ITEMS = 10;

export default class FirebaseFilter extends Component {
  fixedItems = null;

  state = {
    loading: false,
    showMoreFilterItems: false
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    this.props.collection
      .limit(NUMBER_OF_ITEMS)
      .get()
      .then((response) => {
        this.fixedItems = response.docs.map((doc) => doc.data());

        this.setState({
          loading: false
        });
      });
  }

  seeAllClickHandler = () => {
    this.setState({showMoreFilterItems: true});
  }

  closeMoreFilterItems = () => {
    this.setState({showMoreFilterItems: false});
  }

  render() {
    const fixedItemsList = this.fixedItems ?
      this.fixedItems.map((item) => <li key={item.id}>{item.name}</li>) : null;
    
    if (fixedItemsList) {
      fixedItemsList.push(
        <li key='see-all' className={classes.SeeAllItem} onClick={this.seeAllClickHandler}>See all</li>);
    }

    return (
      <Fragment>
          <Modal
            show={this.state.showMoreFilterItems}
            closed={this.closeMoreFilterItems}
            modalTitle={this.props.filterTitle}
            height='580px'  
          >
            {this.props.suggestionFilter}
          </Modal>
        
        <Filter label={this.props.filterTitle}>
          <ul className={classes.FixedItems}>
            {fixedItemsList}
          </ul>
        </Filter>
      </Fragment>
    )
  }
}
