/*Imports*/
import React from "react";

/*Image Imports*/
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';
import discord from '../components/images/icon-discord.png';
import instagram from '../components/images/icon-instagram.png';
import twitter from '../components/images/icon-twitter.png';
import facebook from '../components/images/icon-facebook.png';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const HomePage = () => {
    return (
      <div className="App">
        <div className="nav">
          <header className="App-header">
                <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀
                <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀
                <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>⠀⠀
          </header>
        </div>
        <body className="App-body">
          <h1>Home</h1>
          <b><p>Welcome to IVRY</p></b>
        </body>
        <footer className="App-footer">
            <br></br>
                <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀
                <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀
                <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>⠀⠀
        </footer>
      </div>
    );
  }

  export default HomePage;