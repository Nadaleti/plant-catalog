import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const FilterGenusComponent = (props) => {
  const [filterNameState] = useState('genus');

  return (
    <Fragment>
      {props.children(filterNameState)}
    </Fragment>
  )
}

FilterGenusComponent.propTypes = {
  children: PropTypes.func.isRequired
}

export default FilterGenusComponent;
