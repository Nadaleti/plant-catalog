import React from 'react';

const searchContext = React.createContext({
  plantName: null,
  submit: (e, plantName) => { e.preventDefault(); console.log(plantName) }
});

export default searchContext;