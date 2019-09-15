import React from 'react';
import PropTypes from 'prop-types'
import './WeatherExtraInfo.scss';

const WeatherExtraInfo = ({humidity, wind}) => (
  <div className='weather-extraInfo'>
    <span className='weather-extraInfo__text'>{`Humedad: ${humidity}%`}</span>
    <span className='weather-extraInfo__text'>{`Vientos: ${wind}`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
