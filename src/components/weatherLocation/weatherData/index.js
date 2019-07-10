import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './weatherTemperature'
import WeatherExtraInfo from './weatherExtraInfo'
import './style.css'

const weatherData = ({data}) => {
  const { temperature, weatherState, humidity, wind } = data;
  return(<div className='weather-data'>
    <WeatherTemperature weatherState={weatherState} temperature={temperature}/>
    <WeatherExtraInfo humidity={humidity} wind={wind}/>
  </div>
  )
}

weatherData.protoTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired ,
    wind: PropTypes.string.isRequired ,
  })
}


export default weatherData;
