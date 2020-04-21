import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FilterGenusComponent from './FilterGenusComponent';
import firebase from '../../firebase';

const collectionRef = firebase.firestore().collection('genuses');

const FirebaseFilterGenusComponent = (props) => {
  const [firebaseQueryState, setFirebaseQueryState] = useState(collectionRef);

  useEffect(() => {
    if (!props.selectedFamily) {
      setFirebaseQueryState(collectionRef);
    } else {
      setFirebaseQueryState(collectionRef.where('family_id', '==', props.selectedFamily.value.id));
    }
  }, [props.selectedFamily])

  return (
    <FilterGenusComponent>
      {(filterName) => props.children(firebaseQueryState, filterName)}
    </FilterGenusComponent>
  )
}

FirebaseFilterGenusComponent.propTypes = {
  children: PropTypes.func.isRequired,
  selectedFamily: PropTypes.object
}

export default FirebaseFilterGenusComponent;
