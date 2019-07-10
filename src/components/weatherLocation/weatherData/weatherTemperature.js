import React from 'react';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from './../../../constants/weathers';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const stateToIconName = (weatherState) => {
  switch (weatherState) {
    case CLOUD:
      return 'cloud';
    case CLOUDY:
      return 'cloudy';
    case SUN:
      return 'day-sunny';
    case RAIN:
      return 'rain';
    case SNOW:
      return 'snow';
    case WINDY:
      return 'windy';
    default:
      return 'day-sunny';
  }
}

const getWeatherIcon = weatherState => {
  return (<WeatherIcons className='weather-temperature-icon' name={stateToIconName(weatherState)} size='3x'/>)
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className='weather-temperature-wrapper'>
    <div className='weather-temperature-wrapper-icon '>
      {getWeatherIcon(weatherState)}
    </div>
    <span className='weather-temperature-description'>{`${temperature} C°`}</span>
  </div>
)

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;
