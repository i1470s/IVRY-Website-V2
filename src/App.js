import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import "./components/css/styles.scss";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Store from "./components/Store";
import Chats from "./components/Chats";
import Search from "./components/Search";
import Ash from "./components/Ash";
import Profile from "./components/Profile";
import PageNotFound from "./components/404";
import Legal from "./components/Legal";
import Recoverys from "./components/Recoverys";
import Support from "./components/Support";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); 
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
      <Router history={history}>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>      
      <Route exact path="/learn" component={Learn}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/ash" component={Ash}/>
      <Route exact path="/404" component={PageNotFound}/>
      <Route exact path="/api" component={() => { window.location.href = 'http://api-ivry.tk/'; return null;}}/>
      <Route exact path="/forum" component={() => { window.location.href = 'http://ivry.us.to/forum'; return null;}}/>
      
      <Route exact path="/store" component={Store}/>
      <Route exact path="/store/recoverys" component={Recoverys}/>

      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/profile/chats" component={Chats}/>
      <Route exact path="/profile/login" component={Login}/>
      <Route exact path="/profile/signup" component={Register}/>
      <Route exact path="/profile/support" component={Support}/>
      
      <Route exact path="/legal" component={Legal}/>
      
      <Redirect to="/404"/>
      </Switch>
    </Router>
  );
};

export default App;
