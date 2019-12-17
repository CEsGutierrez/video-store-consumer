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
    
  render () {
    return (
      <div>
        <form className="new-pet-form" onSubmit={this.onSubmitHandler}>
          <h3>Search</h3>
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
            value="Search"
            onClick={this.onSubmitHandler}
          />
        </form>
        <section> {this.props.searchResults.length !== 0 ? this.props.searchResults[0].title : ''} </section>
      </div>
    )
  }
}

export default Search