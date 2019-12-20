import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Movie = ({id, title, overview, release_date, image_url, external_id, selectMovieCallback}) => {
  return (

    <div className='card'>
      <section className='card__content'>
        <img src={image_url} className='card__content-image' alt='Movie cover art'/>
        <section className='card__content-text'>{title}</section>
        <button
            className="card__select"
            onClick={() => { selectMovieCallback(id, 'movieList', 'currentMovie' ) }}
          >
            Select
        </button>
      </section>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
};

export default Movie;