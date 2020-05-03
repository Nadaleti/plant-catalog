import React, { Component, Fragment } from 'react';

import CatalogContext from '../../../context/catalog-context';
import DesktopFilters from './PlantCatalogFilters/PlantCatalogDesktopFilters';
import MobileFilters from './PlantCatalogFilters/PlantCatalogMobileFilters';
import SelectedFilters from '../../Filters/SelectedFilters/SelectedFilters';
import Toolbar from '../../Toolbar/Toolbar';

import classes from './PlantCatalog.module.scss';

export default class PlantCatalog extends Component {
  state = {
    selectedFilters: [],
    shouldShowMobileFilters: false
  };

  filterChangeHandler = (filter) => {
    let selectedFilters = [...this.state.selectedFilters];

    this.removeFilter(filter.filterName, selectedFilters);
    selectedFilters.push(filter);
    this.setState({selectedFilters: selectedFilters});
  }

  filterRemoveClickHandler = (filterName) => {
    const selectedFilters = [...this.state.selectedFilters];

    this.removeFilter(filterName, selectedFilters);
    this.setState({selectedFilters: selectedFilters});
  }

  removeFilter = (filterName, filterList) => {
    const itemToRemoveIdx = filterList
      .findIndex((filter) => filter.filterName === filterName);

    if (itemToRemoveIdx >= 0) {
      filterList.splice(itemToRemoveIdx, 1);
    }
  }

  toggleMobileFilters = () => {
    this.setState((prevState) => {
      return {shouldShowMobileFilters: !prevState.shouldShowMobileFilters}
    });
  }

  render() {
    const providedContext = {
      removeFilter: this.filterRemoveClickHandler,
      selectFilter: this.filterChangeHandler
    }

    const dataContainer = <div className={classes.DataContainer}>
      <SelectedFilters selectedFilters={this.state.selectedFilters} />
      <button className={classes.FiltersButton} onClick={this.toggleMobileFilters}>Filters</button>
      <div>PlantsCardList</div>
    </div>;

    const filters = <Fragment>
      <MobileFilters
        selectedFilters={this.state.selectedFilters}
        show={this.state.shouldShowMobileFilters}
        toggleFilters={this.toggleMobileFilters} />
      <DesktopFilters selectedFilters={this.state.selectedFilters} />
    </Fragment>

    return (
      <div className={classes.PlantCatalog}>
        <CatalogContext.Provider value={providedContext}>
          <Toolbar />
          <main className={classes.Content}>
            {filters}
            {dataContainer}
          </main>
        </CatalogContext.Provider>
      </div>
    )
  }
}
