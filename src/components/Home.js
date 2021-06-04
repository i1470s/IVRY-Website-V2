import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserService from "../services/user.service";

import "./css/Main.css";

import dm from "./images/dm.svg";
import user from "./images/user.svg";
import learn from "./images/learn.svg";
import home from "./images/home.svg";
import store from "./images/store.svg";
import search from "./images/search.svg";

const Home = () => {
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
              <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Home</h1>
              <h3>Welcome {currentUser.username}</h3>
              <br/>
              <small>Were IVRY, a small group of coders offering many different services and programs, varying from simple DLL injection, to GTAV modded accounts, 
                <br/>if your looking for it theres a good chance we have it!, so make sure to check out our shop, <br/>check out our tutorials page to learn how to code and how to homebrew!</small>
              <br/>
              <small>We were founded in early 2018 and since then weve been learning and coding many different languages and programs, currently this very site is our biggest project, 
              <br/>this is the IVRY websites third ideration since 2018 and we expect to keep changing and updating it for years to come, currently were working on our api and creating a back end, while still offering all our services, 
              so do expect to see many changes, reworkings and redos for the next bit.</small>
        </body>
      </div>
      
      
      
      <div id="Footer">
        <footer className="App-footer">
              <a href="/home"><img style={{opacity: ".5"}} width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/learn"><img width="30px" height="40px" alt="learn" src={learn}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
        </footer>
      </div>
    </div>
  );
}

export default Home;
