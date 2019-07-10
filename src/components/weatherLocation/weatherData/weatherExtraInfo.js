import React from 'react';
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({humidity, wind}) => (
  <div className='weather-extraInfo'>
    <span className='weather-extraInfo-text'>{`${humidity}%`}</span>
    <span className='weather-extraInfo-text'>{ `${wind} wind`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
