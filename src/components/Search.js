import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.props.resetMessageCallback()
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.searchTerm !== '') {
      this.props.searchExternalCallback(this.state.searchTerm);

      this.setState({
        searchTerm: '',
      });

    }
  }

  allResults = () => {
    const theResults = this.props.searchResults.map((result, i) => {
      return (
        <div key={i} className='search-card'>
          <p></p>
          <p> <strong>{result.title}</strong></p>
          <img src={result.image_url} className='search-image' alt='Movie cover art'/>
          <p> <strong>Overview: </strong>{result.overview} </p>
          <p> <strong>Release Date: </strong>{result.release_date} </p>
          <button className='add-movie-button'
          onClick={() => { this.props.addMovieCallback(result) }}
          >
          Add to Library
          </button>
          <p></p>
        </div>
      )
    })
    return theResults
  }
    
  render () {
    return (
      <div className='searchList'>
        <section className='search'>
          <section className='search__content'>
            <form onSubmit={this.onSubmitHandler}>
              <div>
                <label htmlFor="search"></label>
                <input
                  className="search__content-bar"
                  name="searchTerm"
                  id="search"
                  onChange={this.onInputChange}
                  value={this.state.searchTerm}
                  placeholder='Enter a movie title'
                />
              </div>
              <input
                className="search__content-button"
                type="submit"
                name="submit"
                value="Search"
                onClick={this.onSubmitHandler}
              />
            </form>
            <section> {this.props.searchResults.length !== 0 ? this.allResults() : ''} </section>
          </section>
        </section>
      </div>
    )
  }
}

Search.propTypes = {
  searchExternalCallback: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  addMovieCallback: PropTypes.func.isRequired,
  resetMessageCallback: PropTypes.func.isRequired,
};

export default Search