import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({id, title, overview, release_date, image_url, external_id, selectMovieCallback}) => {
  return (
    <div>
      {title}
      <button
          // className="btn btn-primary pet-card--select-pet-btn"
          onClick={() => { selectMovieCallback(id, 'movieList', 'currentMovie' ) }}
        >
          Select
      </button>
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