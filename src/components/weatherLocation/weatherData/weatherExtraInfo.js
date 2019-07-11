import React from 'react';
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({humidity, wind}) => (
  <div className='weather-extraInfo'>
    <span className='weather-extraInfo-text'>{`Humedad: ${humidity}%`}</span>
    <span className='weather-extraInfo-text'>{`Vientos: ${wind}`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
