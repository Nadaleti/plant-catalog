import React, { Component } from 'react';

import CatalogContext from '../../../context/catalog-context';
import Filters from '../../Filters/Filters';
import Toolbar from '../../Toolbar/Toolbar';

import classes from './PlantCatalog.module.scss';
import FirebaseFilter from '../../Filters/FirebaseFilter/FirebaseFilter';

export default class PlantCatalog extends Component {
  state = {
    filters: {},
    plantName: null,
    plants: null
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

  render() {
    let providedContextFunctions = {
      submit: this.searchPlants,
      updatePlantName: this.plantNameUpdateHandler
    }

    const filters = <Filters>
      <FirebaseFilter filterTitle='Families' collection='families' />
      <FirebaseFilter filterTitle='Genuses' collection='genuses' />
    </Filters>;

    const dataContainer = <div className={classes.DataContainer}>
      <div>SelectedFilters</div>
      <div>PlantsCardList</div>
    </div>;

    return (
      <div className={classes.PlantCatalog}>
        <CatalogContext.Provider value={providedContextFunctions}>
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
