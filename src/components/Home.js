import React from 'react';
// import PropTypes from 'prop-types';

const Home = ({createRentalCallback, resetMessageCallback}) => {
  
  // const componentDidMount = () => {
  //   resetMessageCallback()
  // }
  
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

export default Home