import React from 'react';

const catalogContext = React.createContext({
  selectFilter: () => {},
  submit: () => {},
  updatePlantName: () => {}
});

export default catalogContext;