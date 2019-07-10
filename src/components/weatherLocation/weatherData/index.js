import React from 'react';
import WeatherTemperature from './weatherTemperature'
import WeatherExtraInfo from './weatherExtraInfo'
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from './../../../constants/weathers';

const weatherData = () => (
  <div>
    <WeatherTemperature weatherState={SNOW} temperature={20}/>
    <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
  </div>
)

export default weatherData;
