import React, { Component, Fragment } from 'react';

import CatalogContext from '../../../context/catalog-context';
import FilterMobile from '../../Filters/FilterMobile/FilterMobile';
import Filters from '../../Filters/Filters';
import FilterMobileWrapper from '../../Filters/FilterMobile/FilterMobileWrapper/FilterMobileWrapper';
import FirebaseFilter from '../../Filters/FirebaseFilter/FirebaseFilter';
import Toolbar from '../../Toolbar/Toolbar';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';

import classes from './PlantCatalog.module.scss';

export default class PlantCatalog extends Component {
  state = {
    filters: {},
    plantName: null,
    plants: null,
    showFilterSidedrawer: false
  };

  shouldComponentUpdate(_, nextState) {
    return nextState.plants !== this.plants;
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
    let providedContextFunctions = {
      submit: this.searchPlants,
      updatePlantName: this.plantNameUpdateHandler
    }

    const desktopFilters = <Fragment>
      <FirebaseFilter filterTitle='Families' collection='families' />
      <FirebaseFilter filterTitle='Genuses' collection='genuses' />
    </Fragment>;

    const mobileFilters = <FilterMobileWrapper>
      <FilterMobile filterName='Families'></FilterMobile>
      <FilterMobile filterName='Genuses'></FilterMobile>
    </FilterMobileWrapper>;

    const dataContainer = <div className={classes.DataContainer}>
      <div>SelectedFilters</div>
      <button className={classes.FiltersButton}
        onClick={this.toggleFiltersSideDrawer}>Filters</button>
      <div>PlantsCardList</div>
    </div>;

    return (
      <div className={classes.PlantCatalog}>
        <CatalogContext.Provider value={providedContextFunctions}>
          <Toolbar />
          <main className={classes.Content}>
            <SideDrawer
              show={this.state.showFilterSidedrawer}
              close={this.toggleFiltersSideDrawer}
              title='Filter by'
            >{mobileFilters}</SideDrawer>
            <Filters>{desktopFilters}</Filters>
            {dataContainer}
          </main>
        </CatalogContext.Provider>
      </div>
    )
  }
}
