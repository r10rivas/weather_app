import React from 'react';
import './LocationList.scss';
import WeatherLocation from './../weatherLocation';

const LocationList = () => {
  return (
    <div className='location-list'>
      <WeatherLocation city={'Buenos Aires,ar'}/>
      {/* <WeatherLocation city={'Bogotá,col'}/>
      <WeatherLocation city={'Santiago,chi'}/> */}
    </div>
  )
}

export default LocationList;
