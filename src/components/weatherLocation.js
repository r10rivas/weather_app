import React from 'react';
import Location from './location'
import WeatherData from './weatherData'


const WeatherLocation = () => (
  <div>
    <Location city={'La capital del mal'}/>
    <WeatherData/>
  </div>
)

export default WeatherLocation;