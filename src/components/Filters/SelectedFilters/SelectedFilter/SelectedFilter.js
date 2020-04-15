import React, { useContext } from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CatalogContext from '../../../../context/catalog-context';

import classes from './SelectedFilter.module.scss';

const SelectedFilter = (props) => {
  const catalogContext = useContext(CatalogContext);

  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div className={classes.SelectedFilter}
      onClick={() => catalogContext.removeFilter(props.selectedFilter.filterName)}>
      <div className={classes.Filter}>
        <label className={classes.FilterName}>{capitalizeFirstLetter(props.selectedFilter.filterName)}</label>
        <span className={classes.FilterValue}>{props.selectedFilter.displayValue}</span>
      </div>
      <FontAwesomeIcon className={classes.RemoveIcon} icon={faTimes} />
    </div>
  )
}

export default SelectedFilter;
