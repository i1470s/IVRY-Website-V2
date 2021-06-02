import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import "./components/css/Main.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Store from "./components/Store";
import Chats from "./components/Chats";
import Search from "./components/Search";
import Ash from "./components/BoardAdmin";
import Profile from "./components/Profile";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import PageNotFound from "./components/404"
import Legal from "./components/Legal"

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const userIsAuthenticated = connectedRouterRedirect({
   // The url to redirect user to if they fail
  redirectPath: '/profile/login',
   // If selector is true, wrapper will not redirect
   // For example let's check that state contains user data
  authenticatedSelector: { user: currentUser } = useSelector((state) => state.auth);
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
  })

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); 
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
      <Router history={history}>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={userIsAuthenticated(Home)}/>      
      <Route exact path="/learn" component={userIsAuthenticated(Learn)}/>
      <Route exact path="/store" component={Store}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/ash" component={Ash}/>
      <Route exact path="/404" component={PageNotFound}/>
      
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/profile/chats" component={Chats}/>
      <Route exact path="/profile/login" component={Login}/>
      <Route exact path="/profile/mod" component={BoardModerator}/>
      <Route exact path="/profile/admin" component={BoardAdmin}/>
      <Route exact path="/profile/signup" component={Register}/>
      
      <Route exact path="/legal" component={Legal}/>
      
      <Redirect to="/404"/>
      </Switch>
    </Router>
  );
};

export default App;
