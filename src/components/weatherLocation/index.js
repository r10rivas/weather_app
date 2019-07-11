import React, { Component } from 'react';
import Location from './location'
import WeatherData from './weatherData/'
import transformWeather from './../../services/trasnformWeather'

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
        weatherState: 'sun',
        humidity: 10,
        wind: '10 m/s'
      }
    }
  }

  handleUpdateClick = () => {
    fetch(api_url).then((response) => {
      return response.json();
    }).then((data_api) => {
      const data = transformWeather(data_api);
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
