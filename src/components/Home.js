import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './Home.css'



const Home = ({createRentalCallback, resetMessageCallback, currentCustomer, currentMovie}) => {
  
  useEffect(() => {
    resetMessageCallback()
  }, [resetMessageCallback]);

  const landing = () => {
        return (
          <div className='landing-image-container'>
          <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0184337d-c90d-4e79-b1da-88281780b75f/d9qgqbf-41738808-68d9-4972-bbfa-86b0f73a77c3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxODQzMzdkLWM5MGQtNGU3OS1iMWRhLTg4MjgxNzgwYjc1ZlwvZDlxZ3FiZi00MTczODgwOC02OGQ5LTQ5NzItYmJmYS04NmIwZjczYTc3YzMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wghrk1OFXAtLI9cLR2Rc1YeV1M_7PaJS2TyMGAUocio'} className='landing-image' alt='Nicolas Cage'/>
        </div>
          ) 
      }

  return (
    <div>
      {(currentCustomer || currentMovie ) ? null : landing()}
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