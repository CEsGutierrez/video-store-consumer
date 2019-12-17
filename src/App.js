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
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/customers">
              <Customers customerList={this.state.customerList} />
              {/* //selectCustomerCallback} */}
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  


// original render 
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );



}


export default App;
