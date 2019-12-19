import React from 'react';
import PropTypes from 'prop-types';

const Home = ({createRentalCallback, resetMessageCallback}) => {
  
  return (
    <div>
      {resetMessageCallback()}
      <button
        // className="btn btn-primary pet-card--select-pet-btn"
        onClick={createRentalCallback}
        >
        Create a rental!
      </button>
    </div>
  )
}

Home.propTypes = {
  createRentalCallback: PropTypes.func.isRequired,
  resetMessageCallback: PropTypes.func.isRequired,
};

export default Home