import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserService from "../services/user.service";

import "./css/styles.scss";

import dm from "./images/dm.svg";
import user from "./images/user.svg";
import learn from "./images/learn.svg";
import home from "./images/home.svg";
import store from "./images/store.svg";
import search from "./images/search.svg";

const Support = () => {
  const required = (value) => {
    if (!value) {
      return (
        <div style={{color: "white"}} role="alert">
          This field is required!
        </div>
      );
    }
  };
  

  const { user: currentUser } = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div id="Page" className="App">

      
      <div id="Nav-bar" className="nav">
        <header className="App-header">
              <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a> <a style={{float: "right", margin: "10px"}} href="/profile/chats"><img width="30px" height="30px" alt="dm" src={dm}/></a> <a style={{float: "right", margin: "10px", color: "white"}} href="/profile"><img width="30px" height="30px" alt="user" src={user}/></a>  
        </header>
      </div>
      
      

      <div id="Content">
        <body className="App-body">
              <br/>
              <br/>
              <br/>
              <br/>
              <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Support</h1>
              <h3>Welcome {currentUser.username}</h3>
              <small style={{color: "white"}}>Welcome to our support page, please leave your issue by creating a ticket below!</small>

              <div className="col-md-12">
              <div className="card card-container">
                <img
                  src="https://ivry.tk/favicon.ico"
                  alt="profile-img"
                  className="profile-img-card"
                  />
                  
              <form style={{width: "300px"}} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">

                    <div><label>Support Coming Soon</label> </div><br/>
                    <small style={{color: "white"}}>For now message us on one of the following</small> <a href="https://linktr.ee/brayden_viana">Contact us</a>
              </form>
            </div>
            </div>
        </body>
      </div>
      
      
      
      <div id="Footer">
        <footer className="App-footer">
              <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/learn"><img width="30px" height="40px" alt="learn" src={learn}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
        </footer>
      </div>
    </div>
  );
}

export default Support;
