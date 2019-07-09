import React from 'react';
import WeatherTemperature from './weatherTemperature'
import WeatherExtraInfo from './weatherExtraInfo'

const weatherData = () => (
  <div>
    <WeatherTemperature/>
    <WeatherExtraInfo humidity={80} wind={'10m/s'} />
  </div>
)

export default weatherData;
