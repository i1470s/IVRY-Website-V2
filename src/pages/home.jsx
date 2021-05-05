/*Imports*/
import React from "react";

/*Image Imports*/
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const HomePage = () => {
    return (
      <div className="App">
        <div className="nav">
          <header className="App-header">
                <b style={{ fontSize: "30px", color: "#fb5804"}}>IVRY</b> <b style={{color: "#fff", fontSize: "10px"}}>V.3</b>
          </header>
        </div>
        <body className="App-body">
          <h1>Home</h1>
          <b><p>Welcome to IVRY</p></b>
        </body>
        <footer className="App-footer">
                <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀
                <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀
                <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
        </footer>
      </div>
    );
  }

  export default HomePage;