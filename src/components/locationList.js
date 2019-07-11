import React from 'react';
import WeatherLocation from './weatherLocation'

const LocationList = () => {
  return(
    <div>
      <WeatherLocation city={'Buenos Aires,ar'}/>
      <WeatherLocation city={'Bogotá,col'}/>
      <WeatherLocation city={'Santiago,chi'}/>
    </div>
  )
}

export default LocationList;
