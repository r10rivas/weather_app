import React from 'react';
import PropTypes from 'prop-types';
import './Location.scss';

const Location = ({city}) => {
  return (
    <div className='location'>
      <h1 className='location__title'>{city}</h1>
    </div>
  )
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location;
