import React from 'react';
import Movie from './Movie';
// import PropTypes from 'prop-types';

const parseMovies = (movies) => {
  return movies.map((movie) => {
    return <Movie
      key={movie.id}
      {...movie}
      // selectMovieCallback={props.selectMovieCallback} // will be another prop passed in
      />
  });
}

const Library = ({movieList}) => {
  return(
    <div>
      {parseMovies(movieList)}
    </div>
  )
}

export default Library;