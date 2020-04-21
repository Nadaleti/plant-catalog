import React, { Component, Fragment } from 'react';

import CatalogContext from '../../../context/catalog-context';
import Filter from '../Filter/Filter';
import Modal from '../../UI/Modal/Modal';

import classes from './FirebaseFilter.module.scss';

const NUMBER_OF_ITEMS = 10;

export default class FirebaseFilter extends Component {
  state = {
    fixedItems: null,
    loading: false,
    showMoreFilterItems: false
  }

  static contextType = CatalogContext;

  componentDidMount() {
    this.loadItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.collection !== prevProps.collection) {
      this.loadItems();
    }
  }

  getFixedItemsList = () => {
    const fixedItemsList = this.state.fixedItems.map((item) => <li key={item.id}
      onClick={() => this.context.selectFilter(item[this.props.displayProperty], this.props.filterName, item)}>{item.name}</li>);

    if (this.state.fixedItems && this.state.fixedItems.length === NUMBER_OF_ITEMS && fixedItemsList) {
      fixedItemsList.push(
        <li key='see-all' className={classes.SeeAllItem} onClick={this.seeAllClickHandler}>See all</li>);
    }

    return <ul className={classes.FixedItems}>
      {fixedItemsList}
    </ul>;
  }

  loadItems = () => {
    this.props.collection
      .limit(NUMBER_OF_ITEMS)
      .get()
      .then((response) => {
        this.setState({
          fixedItems: response.docs.map((doc) => doc.data()),
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
    const providedContext = {
      selectFilter: (displayValue, filterName, selectedFilter) => {
        this.context.selectFilter(displayValue, filterName, selectedFilter);
        this.closeMoreFilterItems();
      }
    };

    const fixedItemsList = this.state.fixedItems ? this.getFixedItemsList() : null;
    const moreFiltersModal = <Modal
      show={this.state.showMoreFilterItems}
      closed={this.closeMoreFilterItems}
      modalTitle={this.props.filterTitle}
      height='580px'>
      {this.props.suggestionFilter}
    </Modal>

    return (
      <Fragment>
        <Filter title={this.props.filterTitle}>
          {fixedItemsList}
        </Filter>
        <CatalogContext.Provider value={providedContext}>
          {moreFiltersModal}
        </CatalogContext.Provider>
      </Fragment>
    )
  }
}
