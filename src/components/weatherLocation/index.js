import React from 'react';
import Location from './location'
import WeatherData from './weatherData/'
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from './../../constants/weathers';

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
}

const WeatherLocation = () => (
  <div>
    <Location city={'La capital del mal'}/>
    <WeatherData data={data}/>
  </div>
)

export default WeatherLocation;
