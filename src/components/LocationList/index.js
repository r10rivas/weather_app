import React, { Component } from 'react';
import './LocationList.scss';
import PropTypes from "prop-types";
import WeatherLocation from './../weatherLocation';

class LocationList extends Component {
  handleWeatherLocationClick = city => {
    const { onSelectedLocation } = this.props;
    onSelectedLocation(city);
  }

  citiesToComponent = cities => {
    return Object.values(cities).map(city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => this.handleWeatherLocationClick(city)}
      />
    ));
  }

  render() {
    const { cities } = this.props;
    return (
      <div className='location-list'>
        {this.citiesToComponent(cities)}
      </div>
    )
  }
}

LocationList.propTypes = {
  cities: PropTypes.object.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;
