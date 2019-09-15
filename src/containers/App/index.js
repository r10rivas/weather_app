import React from 'react';
import './App.scss';
import LocationList from './../../components/LocationList';

function App() {
  return (
    <div className='app'>
      <LocationList/>
      <LocationList/>
    </div>
  );
}

export default App;
