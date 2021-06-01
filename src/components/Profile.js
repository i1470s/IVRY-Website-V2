import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import dm from "./images/dm.svg";
import user from "./images/user.svg";
import learn from "./images/learn.svg";
import home from "./images/home.svg";
import store from "./images/store.svg";
import search from "./images/search.svg";

import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";

import { history } from "../helpers/history";

const Profile = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
    <div id="Page" className="App">
      
      
      
      <div id="Nav-bar" className="nav">
        <header className="App-header">
              <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a> <a style={{float: "right", margin: "10px"}} href="/profile/chats"><img width="30px" height="30px" alt="dm" src={dm}/></a> <a style={{float: "right", opacity: ".5", margin: "10px", color: "white"}} href="/profile"><img width="30px" height="30px" alt="user" src={user}/></a>  
        </header>
      </div>
      <br/>
      <br/>
      <br/>
      <div style={{color: "white"}}>
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      <p>
        <strong>Username</strong> {currentUser.username}
      </p>
      <p>
        <strong>Email</strong> {currentUser.email}
      </p>
      <p>
        <strong>Account Id</strong> {currentUser.id}
      </p>
      <p>
        <strong>Token</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <strong>Authorities</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <p>
        <strong>Account Options</strong>
      </p>
      <a style={{color: "white"}} href="/"><button style={{border: "2px #fff solid", background: "#000", borderRadius: "5px"}} onClick={logOut}>Log Out</button></a>
      <a style={{color: "white"}} href=""><button style={{border: "2px #fff solid", background: "#000", borderRadius: "5px"}}>Coming Soon</button></a>
      <a style={{color: "white"}} href=""><button style={{border: "2px #fff solid", background: "#000", borderRadius: "5px"}}>Coming Soon</button></a>
      
      
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
