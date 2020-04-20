import React from 'react';

const catalogContext = React.createContext({
  removeFilter: () => {},
  selectFilter: () => {},
  submit: () => {},
  updatePlantName: () => {}
});

export default catalogContext;