import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import dm from "./images/dm.svg";
import user from "./images/user-highlighted.svg";
import learn from "./images/learn.svg";
import home from "./images/home.svg";
import store from "./images/store.svg";
import search from "./images/search.svg";

import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";

import { history } from "../helpers/history";

const Profile = () => {
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
    <div id="Page" className="App">
      
      
      
      <div id="Nav-bar" className="nav">
        <header className="App-header">
              <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a> <a style={{float: "right", margin: "10px"}} href="/profile/chats"><img width="30px" height="30px" alt="dm" src={dm}/></a> <a style={{float: "right", margin: "10px", color: "white"}} href="/profile"><img width="30px" height="30px" alt="user" src={user}/></a>  
        </header>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Profile</h1>
      <div style={{color: "white"}}>
        <h2>
          <strong>{currentUser.username}</strong> Profile
        </h2>
      <p>
        <strong>Username:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Account Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Account Options:</strong>
      </p> 
      <a style={{color: "white"}} href="/profile/support"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "120px", minWidth: "100px", fontSize: "20px"}}>Support</button></a><br/><br/>
      <a style={{color: "white"}} href="/"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "130px", minWidth: "100px", fontSize: "20px"}} onClick={logOut}>Log Out</button></a><br/><br/><br/><br/><br/>
      <p>
        <strong>App Options:</strong>
      </p>
      <a style={{color: "white"}} href="/legal"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "195px", minWidth: "100px", fontSize: "20px"}}>App Information</button></a><br/><br/>
      <a style={{color: "white"}} href="/api-ivry.tk"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "100px", minWidth: "100px", fontSize: "20px"}}>API</button></a>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div id="Footer">
        <footer className="App-footer">
              <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/learn"><img width="30px" height="40px" alt="learn" src={learn}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
        </footer>
      </div>
    </div>
  </div>
  );
};

export default Profile;
