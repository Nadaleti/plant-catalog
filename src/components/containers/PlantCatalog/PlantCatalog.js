import React, { Component } from 'react';

import CatalogContext from '../../../context/catalog-context';
import DesktopFilters from './PlantCatalogFilters/PlantCatalogDesktopFilters/PlantCatalogDesktopFilters';
import MobileFilters from './PlantCatalogFilters/PlantCatalogMobileFilters/PlantCatalogMobileFilters';
import SelectedFilters from '../../Filters/SelectedFilters/SelectedFilters';
import Toolbar from '../../Toolbar/Toolbar';

import classes from './PlantCatalog.module.scss';

export default class PlantCatalog extends Component {
  state = {
    selectedFilters: [],
    plantName: null,
    plants: null,
    shouldShowMobileFilters: false
  };

  shouldComponentUpdate(_, nextState) {
    return nextState.plants !== this.plants;
  }

  filterClickHandler = (displayValue, filterName, selectedFilter) => {
    let selectedFilters = [...this.state.selectedFilters];

    this.removeFilter(filterName, selectedFilters);

    selectedFilters.push({
      displayValue: displayValue,
      filterName: filterName,
      value: selectedFilter
    });

    this.setState({selectedFilters: selectedFilters});
  }

  filterRemoveClickHandler = (filterName) => {
    const selectedFilters = [...this.state.selectedFilters];

    this.removeFilter(filterName, selectedFilters);

    this.setState({selectedFilters: selectedFilters})
  }

  removeFilter = (filterName, filterList) => {
    const itemToRemoveIdx = filterList
      .findIndex((filter) => filter.filterName === filterName);

    if (itemToRemoveIdx >= 0) {
      filterList.splice(itemToRemoveIdx, 1);
    }
  }

  plantNameUpdateHandler = (plantName) => {
    this.setState({ plantName: plantName });
  }

  searchPlants = () => {
    console.log(this.state);
  }

  toggleMobileFilters = () => {
    this.setState((prevState) => {
      return {shouldShowMobileFilters: !prevState.shouldShowMobileFilters}
    });
  }

  render() {
    const providedContext = {
      removeFilter: this.filterRemoveClickHandler,
      selectFilter: this.filterClickHandler,
      submit: this.searchPlants,
      updatePlantName: this.plantNameUpdateHandler
    }

    const dataContainer = <div className={classes.DataContainer}>
      <SelectedFilters selectedFilters={this.state.selectedFilters} />
      <button className={classes.FiltersButton}
        onClick={this.toggleMobileFilters}>Filters</button>
      <div>PlantsCardList</div>
    </div>;

    return (
      <div className={classes.PlantCatalog}>
        <CatalogContext.Provider value={providedContext}>
          <Toolbar />
          <main className={classes.Content}>
            <MobileFilters
              selectedFilters={this.state.selectedFilters}
              show={this.state.shouldShowMobileFilters}
              toggleFilters={this.toggleMobileFilters} />
            <DesktopFilters selectedFilters={this.state.selectedFilters} />
            {dataContainer}
          </main>
        </CatalogContext.Provider>
      </div>
    )
  }
}
