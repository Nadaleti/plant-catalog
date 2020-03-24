import React, { Component } from 'react';

import Toolbar from '../../Toolbar/Toolbar';

import classes from './PlantCatalog.module.scss';

export default class PlantCatalog extends Component {
  render() {
    return (
      <div className={classes.PlantCatalog}>
        <Toolbar />
        <div>SelectedFilters</div>
        <div>Filters</div>
        <div>PlantsCardList</div>
      </div>
    )
  }
}
