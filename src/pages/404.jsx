/*Imports*/
import React from "react";

/*Image Imports*/
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const PageNotFound = () => {
    return (
      <div id="Page" className="App">
            
            
            
            <div id="Nav-bar" className="nav">
                <header className="App-header">
                      <a href="https://ivry.tk/"><b style={{ fontSize: "30px", color: "#fb5804"}}>IVRY</b></a> <b style={{color: "#fff", fontSize: "10px"}}>V.3.alpha</b>
                </header>
            </div>   
            
            
            
            <div id="Content">         
                <body className="App-body">
                      <h1>404 Resource Not Found</h1>
                </body>
            </div>
            
            
            
            <div id="Footer">
                <footer className="App-footer">
                      <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀
                      <a href="/learn"><img width="30px" height="40px" alt="search" src={learn}/></a>⠀⠀
                      <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀
                      <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
                </footer>
            </div>
        </div>
    );
};

export default PageNotFound;