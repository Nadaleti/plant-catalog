import React from 'react';

import SelectedFilter from './SelectedFilter/SelectedFilter';

import classes from './SelectedFilters.module.scss';

const selectedFilters = (props) => {
  return (
    props.selectedFilters.length > 0 ?
      <div className={classes.SelectedFiltersContainer}>
        {
          props.selectedFilters.map((filter) => <SelectedFilter selectedFilter={filter} key={filter.displayValue} />)
        }
      </div> : null
  )
}

export default selectedFilters;
