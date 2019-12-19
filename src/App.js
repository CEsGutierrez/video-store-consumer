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
      success: '',
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

  resetMessage = () => {
    this.setState({
      error: '',
      success: '',
    })
  }

  displayMessage = () => {
    if (this.state.error !== '') {
      return <h1>{this.state.error}</h1>
    } else if (this.state.success !== '') {
      return <h1>{this.state.success}</h1>
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
          error: 'Error! This movie is already in the library',
          success: ''
        })
        return
      }
    } 
    
    let improvedMovie = newMovie
    newMovie["inventory"] = 1 
    
    axios.post('http://localhost:3000/movies', improvedMovie)
    
    .then((response) => {
      const updatedData = this.state.movieList;
      updatedData.push(response.data);
      this.setState({
        movieList: updatedData,
        error: '',
        success: 'Successfully added movie to library'
      });
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  createRental = () => {
    let dueDate = new Date();
    dueDate.setDate(new Date().getDate()+7);
    if (this.state.currentMovie === undefined || this.state.currentCustomer === undefined) {
      this.setState({
        error: 'Error! You must have both a customer and movie selected to create a rental.'
      })
      return
    }
    axios.post(`http://localhost:3000/rentals/${this.state.currentMovie.title}/check-out`, {customer_id: this.state.currentCustomer.id, due_date: dueDate} )
    .then(() => {
      this.setState({
        success: 'Successfully created rental'
      })
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
            {this.displayMessage()}
          </section>
  
          <Switch>
            <Route path="/search">
              <Search searchExternalCallback={this.searchExternal} searchResults={this.state.searchResults} addMovieCallback={this.addMovie} resetMessageCallback={this.resetMessage}/>
            </Route>
            <Route path="/customers">
              <Customers customerList={this.state.customerList} selectCustomerCallback={this.selectItem} resetMessageCallback={this.resetMessage}/>
            </Route>
            <Route path="/library">
              <Library movieList={this.state.movieList} selectMovieCallback={this.selectItem} resetMessageCallback={this.resetMessage}/>
            </Route>
            <Route path="/">
              <Home createRentalCallback={this.createRental} resetMessageCallback={this.resetMessage}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}


export default App;
