import convert from 'convert-units';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from './../constants/weathers';


const getWeatherState = weather => {
  console.log( weather );
  return RAIN
}

const getTemperature = tempKelvin => {
  return convert(tempKelvin).from('K').to('C').toFixed(2);
}

const transformWeather = data_api => {
  const {humidity} = data_api.main;
  const {speed} = data_api.wind;
  const weatherState = getWeatherState(data_api.weather);
  const temperature = getTemperature(data_api.main.temp)
  return {
    humidity,
    temperature: temperature,
    weatherState,
    wind: `${speed} m/s`
  }
}

export default transformWeather;