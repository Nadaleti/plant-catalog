import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const FilterFamilyComponent = (props) => {
  const [filterNameState] = useState('family');

  return (
    <Fragment>
      {props.children(filterNameState)}
    </Fragment>
  )
}

FilterFamilyComponent.propTypes = {
  children: PropTypes.func.isRequired
}

export default FilterFamilyComponent;
