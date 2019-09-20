import React, { Component }from 'react';
import './App.scss';
import LocationList from './../../components/LocationList';
import ForecastExtended from '../../components/ForecastExtended';

const cities = {
  'Buenos Aires': 'Buenos Aires,ar',
  'Bogota': 'Bogota,col',
  'Madrid': 'Madrid,es',
  'Ciudad de México': 'Ciudad de México,mx'
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
    // this.handleSelectedLocation = this.handleSelectedLocation.bind(this);
  }


  handleSelectedLocation = city => {
    console.log( city );
    this.setState({
      city
    })
    // console.log( 'En app', city );
  }

  render() {
    return (
      <div className='app'>
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
        <ForecastExtended city={this.state.city}/>
      </div>
    );
  }
}

export default App;
