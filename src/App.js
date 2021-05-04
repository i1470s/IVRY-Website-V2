import React, { Component } from 'react';
import logo from './components/images/logo.svg';
import './components/css/App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import MainPage from "./pages";
import PageNotFound from "./pages/404";
import HomePage from "./pages/home";
import StorePage from "./pages/store";
import SearchPage from "./pages/search";



class App extends Component {
  render() {
    return <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/store" component={StorePage}/>
      <Route exact path="/search" component={SearchPage}/>
      <Route exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>
  }
}

export default App;