import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Home = ({createRentalCallback, resetMessageCallback}) => {
  
  useEffect(() => {
    resetMessageCallback()
  }, [resetMessageCallback]);

  return (
    <div>
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