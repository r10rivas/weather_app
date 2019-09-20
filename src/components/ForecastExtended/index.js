import React, { Component } from 'react';
import './ForecastExtended.scss';

class ForecastExtended extends Component {
  render () {
    const { city } = this.props;
    return (
      <div className='forecast-extended'>
        <div className='forecast-extended__warpper'>
          <h1 className='forecast-extended__title'>{ `Extendido ${city}` }</h1>
        </div>
      </div>
    )
  }
}

// const ForecastExtended = () => {
//   return (
//     <div className='forecast-extended'>
//       <div className='forecast-extended__warpper'>
//         <h1 className='forecast-extended__title'>Extendido</h1>
//       </div>
//     </div>
//   )
// }

export default ForecastExtended;
