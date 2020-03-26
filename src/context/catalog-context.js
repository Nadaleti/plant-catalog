import React from 'react';

const catalogContext = React.createContext({
  updatePlantName: () => {},
  submit: () => {}
});

export default catalogContext;