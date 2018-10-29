import React from 'react';
import './style.css';
import BoilerPlateContainer from '../../containers/BoilerPlateContainer';

export const App = () => (
  <div className="App">
    {<BoilerPlateContainer /> || <p>Your App Goes Here!</p>}
  </div>
);

export default App;
