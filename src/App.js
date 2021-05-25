/*IMPORTS*/
import React, { Component } from 'react';
import GoTrue from 'gotrue-js';
import './components/css/App.css';

/*CONFIG*/
document.body.style.overflow = "hidden"

/*AUTH*/

const auth = new GoTrue({
  APIUrl: 'https://ivry.tk/.netlify/identity',
  audience: '',
  setCookie: true,
});






/*APP START*/
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainPage from "./pages";
import PageNotFound from "./pages/404";
import HomePage from "./pages/home";
import UserPage from "./pages/user"
import DMPage from "./pages/dm"
import LearnPage from "./pages/learn";
import StorePage from "./pages/store";
import SearchPage from "./pages/search";
import Ash from "./pages/ash"

class App extends Component {
  render() {
    return <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/home/user" component={UserPage}/>
      <Route exact path="/home/user/dm" component={DMPage}/>
      
      <Route exact path="/learn" component={LearnPage}/>
      <Route exact path="/store" component={StorePage}/>
      <Route exact path="/search" component={SearchPage}/>
      <Route exact path="/ash" component={Ash}/>
      <Route exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>
  }
}

export default App;