import React, { Component } from 'react';
import Location from './../Location/';
import WeatherData from '../WeatherData';
import transformWeather from './../../services/transformWeather'
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import './WeatherLocation.scss';

const token = 'e9d1e025285c65ad323a174cd42d9d5d';
class WeatherLocation extends Component {
  // state = {
  //   data: data,
  //   city: 'buenos aires',
  // }

  constructor({city}) {
    super();
    this.state = {
      city,
      data: null
    }
  }

  componentWillMount() {
    this.handleUpdateClick();
  }

  // componentDidMount() {
  //   console.log( 'ya fue montado' );
  // }


  // componentWillUpdate() {
  //   console.log( 'sera updateado' );
  // }

  // componentDidUpdate() {
  //   console.log( 'fue updateado' );
  // }

  handleUpdateClick = async () => {
    const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${token}`;
    try {
      let response = await fetch(api_url);
      const data_api = await response.json();
      const data = await transformWeather(data_api);
      this.setState({data})
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    // console.log( 'render' );
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className='weather-location' onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? <WeatherData data={data}/> : <CircularProgress color={'secondary'} size={50}/>}
      </div>
    )
  }
}

WeatherLocation.protoTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
