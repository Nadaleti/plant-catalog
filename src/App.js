import React from 'react';

import Toolbar from './components/Toolbar/Toolbar';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Toolbar />
      <div>Plants catalog</div>
    </div>
  );
}

export default App;
