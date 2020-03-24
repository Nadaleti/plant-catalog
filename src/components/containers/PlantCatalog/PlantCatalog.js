import React, { Component } from 'react';

import classes from './PlantCatalog.module.scss';

export default class PlantCatalog extends Component {
  render() {
    return (
      <div className={classes.PlantCatalog}>
        <div>Toolbar</div>
        <div>SelectedFilters</div>
        <div>Filters</div>
        <div>PlantsCardList</div>
      </div>
    )
  }
}
