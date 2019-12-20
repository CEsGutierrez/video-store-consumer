import React, {useEffect} from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';
import './Library.css';

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
  useEffect(() => {
    resetMessageCallback()
  }, [resetMessageCallback]);
  
  return(
    <div> 
      <h1 className='pageHeader'> Library </h1>
      <div className='libraryList'>
        {parseMovies(movieList, selectMovieCallback)}
      </div>
    </div>
  )
}

Library.propTypes = {
  movieList: PropTypes.array.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
  resetMessageCallback: PropTypes.func.isRequired,
};

export default Library;