import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// searchExternalCallback, searchResults

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
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
        <div key={i}>
          <p> Title: {result.title} </p>
          <p> Overview: {result.overview} </p>
          <p> Release Date: {result.release_date} </p>
          <p> Image URL: {result.image_url} </p>
          <p> External ID: {result.external_id} </p>
          <button
          // className="btn btn-primary pet-card--select-pet-btn"
          onClick={() => { this.props.addMovieCallback(result) }}
          >
          Add to Library
          </button>
        </div>
      )
    })
    return theResults
  }
    
  render () {
    return (
      <div>
        <form className="new-pet-form" onSubmit={this.onSubmitHandler}>
          <div>
            <label className="" htmlFor="search">Search: </label>
            <input
              name="searchTerm"
              id="search"
              onChange={this.onInputChange}
              value={this.state.searchTerm}
              placeholder='Enter a movie title'
            />
          </div>
          <input
            className=""
            type="submit"
            name="submit"
            value="Submit"
            onClick={this.onSubmitHandler}
          />
        </form>
        <section> {this.props.searchResults.length !== 0 ? this.allResults() : ''} </section>
      </div>
    )
  }
}

export default Search