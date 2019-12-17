import React from 'react';
import Movie from './Movie';
// import PropTypes from 'prop-types';

const parseMovies = (movies, selectMovieCallback) => {
  return movies.map((movie) => {
    return <Movie
      key={movie.id}
      {...movie}
      selectMovieCallback={selectMovieCallback}
      />
  });
}

const Library = ({movieList, selectMovieCallback}) => {
  return(
    <div>
      {parseMovies(movieList, selectMovieCallback)}
    </div>
  )
}

export default Library;