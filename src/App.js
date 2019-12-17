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
      error: '',
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

  selectItem =(itemId, typeList, currentType) => {
    const updatedState = {}
    const list = this.state[typeList]

    const selected = list.find((item) => {
      return item.id === itemId;
    })
    
    updatedState[currentType] = selected

    this.setState(updatedState);
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
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/search">
              <Search />
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
