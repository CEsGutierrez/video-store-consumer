import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './components/Home';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import axios from 'axios';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  constructor() {
    super()
    this.state={
      currentCustomer: undefined, // instance of customer
      currentMovie: undefined, // instance of customer
      movieList: [],
      customerList: [],
      searchResults: [],
      error: '',
      alreadyInLibraray: false,
      successfullyAdded: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies')
    .then((response) => {
      this.setState({movieList: response.data});
      // console.log(response.data)
    })
    .catch((error) => {
      this.setState({error: error.message}); 
    });

    axios.get('http://localhost:3000/customers')
    .then((response) => {
      this.setState({customerList: response.data});
    })
    .catch((error) => {
      this.setState({error: error.message}); //maybe do a push to maintain both messages 
    });

  }

  selectItem = (itemId, typeList, currentType) => {
    const updatedState = {}
    const list = this.state[typeList]

    const selected = list.find((item) => {
      return item.id === itemId;
    })
    
    updatedState[currentType] = selected

    this.setState(updatedState);
  }

  searchExternal = (searchTerm) => {
    axios.get(`http://localhost:3000/movies?query=${searchTerm}`)
    .then((response) => {
      this.setState({searchResults: response.data});
    })
    .catch((error) => {
      this.setState({error: error.message}); //maybe do a push to maintain both messages 
    });
  }

  resetMessage= () => {
    this.setState({
      alreadyInLibrary: false,
      successMessage: false,
    })
  }

  displayMessage = () => {
    if (this.state.alreadyInLibrary === true) {
      return <h1>Already in library!</h1>
    } else if (this.state.successMessage === true) {
      return <h1>Successfully added to library!</h1>
    } else {
      return ''
    }
  }

  addMovie = (newMovie) => {
    const movieList = this.state.movieList
    let i;
    for (i = 0; i < movieList.length; i++) {
      if (movieList[i].external_id === newMovie.external_id) {
        console.log('already in library')
        this.setState({
          alreadyInLibrary: true,
          successMessage: false,
        })
        return
      }
    } axios.post('http://localhost:3000/movies', newMovie)
    .then((response) => {
      const updatedData = this.state.movieList;
      updatedData.push(response.data);
      this.setState({
        movieList: updatedData,
        error: '',
        alreadyInLibraray: false,
        successMessage: true,
      });
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }
  
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
            </ul>
          </nav>
          <section>
            <h1>Current Movie: {this.state.currentMovie ? this.state.currentMovie.title : ''}</h1>
            <h1>Current Customer: {this.state.currentCustomer ? this.state.currentCustomer.name : ''}</h1>
          </section>
  
          <Switch>
            <Route path="/search">
              <Search searchExternalCallback={this.searchExternal} searchResults={this.state.searchResults} addMovieCallback={this.addMovie} displayMessageCallback={this.displayMessage} resetMessageCallback={this.resetMessage}/>
            </Route>
            <Route path="/customers">
              <Customers customerList={this.state.customerList} selectCustomerCallback={this.selectItem} />
              {/* //selectCustomerCallback} */}
            </Route>
            <Route path="/library">
              <Library movieList={this.state.movieList} selectMovieCallback={this.selectItem}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}


export default App;
