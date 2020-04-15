import React, { Component, Fragment } from 'react';

import CatalogContext from '../../../context/catalog-context';
import FilterMobile from '../../Filters/FilterMobile/FilterMobile';
import Filters from '../../Filters/Filters';
import FilterMobileWrapper from '../../Filters/FilterMobile/FilterMobileWrapper/FilterMobileWrapper';
import FamiliesFilter from '../../Filters/FirebaseFilter/FamiliesFilter/FamiliesFilter';
import FamiliesFilterSuggestion from '../../Filters/FirebaseFilter/FamiliesFilter/FamiliesFilterSuggestion';
import GenusesFilter from '../../Filters/FirebaseFilter/GenusesFilter/GenusesFilter';
import GenusesFilterSuggestion from '../../Filters/FirebaseFilter/GenusesFilter/GenusesFilterSuggestion';
import SelectedFilters from '../../Filters/SelectedFilters/SelectedFilters';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';
import Toolbar from '../../Toolbar/Toolbar';

import classes from './PlantCatalog.module.scss';

export default class PlantCatalog extends Component {
  state = {
    selectedFilters: [],
    plantName: null,
    plants: null,
    showFilterSidedrawer: false
  };

  shouldComponentUpdate(_, nextState) {
    return nextState.plants !== this.plants;
  }

  filterClickHandler = (displayValue, filterName, selectedFilter) => {
    let selectedFilters = [...this.state.selectedFilters];

    selectedFilters.push({
      displayValue: displayValue,
      filterName: filterName,
      value: selectedFilter
    });

    this.setState({selectedFilters: selectedFilters});
  }

  filterRemoveHandler = (filterName) => {
    const selectedFilters = [...this.state.selectedFilters];

    const itemToRemoveIdx = selectedFilters
      .findIndex((filter) => filter.filterName === filterName);

    if (itemToRemoveIdx >= 0) {
      selectedFilters.splice(itemToRemoveIdx, 1);
    }

    this.setState({selectedFilters: selectedFilters})
  }

  plantNameUpdateHandler = (plantName) => {
    this.setState({ plantName: plantName });
  }

  searchPlants = () => {
    console.log(this.state);
  }

  toggleFiltersSideDrawer = () => {
    this.setState((prevState) => {
      return {showFilterSidedrawer: !prevState.showFilterSidedrawer}
    });
  }

  render() {
    const providedContext = {
      removeFilter: this.filterRemoveHandler,
      selectFilter: this.filterClickHandler,
      submit: this.searchPlants,
      updatePlantName: this.plantNameUpdateHandler
    }

    const desktopFilters = <Fragment>
      <FamiliesFilter />
      <GenusesFilter family={this.state.selectedFilters.find((filter) => filter.filterName === 'family')} />
    </Fragment>;

    const mobileFilters = <FilterMobileWrapper>
      <FilterMobile filterName='Families'>
        <FamiliesFilterSuggestion />
      </FilterMobile>
      <FilterMobile filterName='Genuses'>
        <GenusesFilterSuggestion family={this.state.selectedFilters.find((filter) => filter.filterName === 'family')} />
      </FilterMobile>
    </FilterMobileWrapper>;

    const dataContainer = <div className={classes.DataContainer}>
      <SelectedFilters selectedFilters={this.state.selectedFilters} />
      <button className={classes.FiltersButton}
        onClick={this.toggleFiltersSideDrawer}>Filters</button>
      <div>PlantsCardList</div>
    </div>;

    return (
      <div className={classes.PlantCatalog}>
        <CatalogContext.Provider value={providedContext}>
          <Toolbar />
          <main className={classes.Content}>
            <SideDrawer
              show={this.state.showFilterSidedrawer}
              close={this.toggleFiltersSideDrawer}
              title='Filter by'
              backdrop
            >{mobileFilters}</SideDrawer>
            <Filters>{desktopFilters}</Filters>
            {dataContainer}
          </main>
        </CatalogContext.Provider>
      </div>
    )
  }
}
