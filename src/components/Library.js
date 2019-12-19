import React from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

const parseMovies = (movies, selectMovieCallback) => {
  return movies.map((movie) => {
    return <Movie
      key={movie.id}
      {...movie}
      selectMovieCallback={selectMovieCallback}
      />
  });
}

const Library = ({movieList, selectMovieCallback, resetMessageCallback}) => {
  return(
    <div>
      {resetMessageCallback()}
      {parseMovies(movieList, selectMovieCallback)}
    </div>
  )
}

Library.propTypes = {
  movieList: PropTypes.array.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
  resetMessageCallback: PropTypes.func.isRequired,
};

export default Library;