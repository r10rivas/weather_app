import React, { Component } from 'react';
import convert from 'convert-units';
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

const location = 'Buenos Aires,ar'
const token = 'e9d1e025285c65ad323a174cd42d9d5d'
const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${token}`;

class WeatherLocation extends Component {
  // state = {
  //   data: data,
  //   city: 'buenos aires',
  // }

  constructor() {
    super();
    this.state = {
      city: 'buenos aires',
      data: {
        temperature: 20,
        weatherState: SUN,
        humidity: 10,
        wind: '10 m/s'
      }
    }
  }

  getWeatherState = weather => {
    console.log( weather );
    return RAIN
  }
  getTemperature = tempKelvin => {
    return convert(tempKelvin).from('K').to('C').toFixed(2);
  }

  getData = data_api => {
    const {humidity} = data_api.main;
    const {speed} = data_api.wind;
    const weatherState = this.getWeatherState(data_api.weather);
    const temperature = this.getTemperature(data_api.main.temp)
    return {
      humidity,
      temperature: temperature,
      weatherState,
      wind: `${speed} m/s`
    }

  }

  handleUpdateClick = () => {
    fetch(api_url).then((response) => {
      return response.json();
    }).then((data_api) => {
      const data = this.getData(data_api);
      this.setState({data})
    }).catch((error) => {
      console.error(error);
    })
  }

  render = () => {
    const {city, data}= this.state;
    return(
      <div>
        <Location city={city}/>
        <WeatherData data={data}/>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

export default WeatherLocation;
