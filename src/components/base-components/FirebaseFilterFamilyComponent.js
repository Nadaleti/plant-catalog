import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterFamilyComponent from './FilterFamilyComponent';
import firebase from '../../firebase';

const FirebaseFilterFamilyComponent = (props) => {
  const [collectionRefState] = useState(firebase.firestore().collection('families'));

  return (
    <FilterFamilyComponent>
      {(filterName) => props.children(collectionRefState, filterName)}
    </FilterFamilyComponent>
  )
}

FirebaseFilterFamilyComponent.propTypes = {
  children: PropTypes.func.isRequired
}

export default FirebaseFilterFamilyComponent;
