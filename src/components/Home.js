import React from 'react';
// import PropTypes from 'prop-types';

const Home = ({createRentalCallback}) => {
  return (
    <button
      // className="btn btn-primary pet-card--select-pet-btn"
      onClick={createRentalCallback}
      >
      Create a rental!
    </button>
  )
}

export default Home