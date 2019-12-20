import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './Home.css'

const Home = ({createRentalCallback, resetMessageCallback, currentCustomer, currentMovie}) => {
  
  useEffect(() => {
    resetMessageCallback()
  }, [resetMessageCallback]);

  return (
    <div>
      <div className='homeList'>
        {currentMovie ? 
          <section className='home'>
            <section className='home__content'>
              <img src={currentMovie.image_url} className='home__content-image' alt='Movie cover art'/>
              <section className='home__content-text'>{currentMovie ? currentMovie.title : null}</section>
            </section>
          </section> : null
        }
        {currentCustomer ?
          <section className='home'>
            <section className='home__content'>
            <img src='https://i1.sndcdn.com/avatars-000139920883-maf14v-t500x500.jpg' className='home__content-image' alt='Movie cover art'/>
              <section className='home__content-text'>{currentCustomer.name}</section>
            </section>
          </section> : null
        }
      </div>
      <div className='homeList'>
        <button
          className='rentalButton'
          onClick={createRentalCallback}
          >
          Create a rental!
        </button>
      </div>
    </div>
  )
}

Home.propTypes = {
  createRentalCallback: PropTypes.func.isRequired,
  resetMessageCallback: PropTypes.func.isRequired,
};

export default Home