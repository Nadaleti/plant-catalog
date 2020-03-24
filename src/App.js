import React from 'react';

import PlantCatalog from './components/containers/PlantCatalog/PlantCatalog';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <PlantCatalog />
    </div>
  );
}

export default App;
