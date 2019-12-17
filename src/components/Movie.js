import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({id, title, overview, release_date, image_url, external_id}) => {
  return (
    <div>
      {title}
    </div>
  )
}

export default Movie;