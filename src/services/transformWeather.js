import convert from 'convert-units';
import {
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from './../constants/weathers';


const getWeatherState = weather => {
  const { id } = weather[0];

  if (id < 300 ) {
    return THUNDER;
  } else if (id < 400) {
    return DRIZZLE;
  } else if (id < 600) {
    return RAIN;
  } else if (id < 700) {
    return SNOW;
  } else if (id === 800) {
    return SUN;
  } else {
    return CLOUDY;
  }
}

const getTemperature = tempKelvin => {
  return Number(convert(tempKelvin).from('K').to('C').toFixed(2));
}

const transformWeather = data_api => {
  const { weather } = data_api;
  const { humidity, temp } = data_api.main;
  const { speed } = data_api.wind;
  const weatherState = getWeatherState(data_api.weather);
  const temperature = getTemperature(temp)
  return {
    humidity,
    temperature: temperature,
    weatherState,
    wind: `${speed} m/s`
  }
}

export default transformWeather;