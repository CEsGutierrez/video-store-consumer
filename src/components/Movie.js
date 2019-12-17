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

export default Movie;