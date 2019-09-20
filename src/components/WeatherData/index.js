import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from '../WeatherTemperature';
import WeatherExtraInfo from '../WeatherExtraInfo/';
import './WeatherData.scss'

const WeatherData = ({data}) => {
  const { temperature, weatherState, humidity, wind } = data;
  return(
    <div className='weather-data'>
      <div className='weather-data__wrapper'>
        <WeatherTemperature weatherState={weatherState} temperature={temperature}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
      </div>
    </div>
  )
}

WeatherData.protoTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired ,
    wind: PropTypes.string.isRequired ,
  })
}


export default WeatherData;
