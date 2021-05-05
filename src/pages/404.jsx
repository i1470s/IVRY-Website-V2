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
        <div className="App">
            <div className="nav">
            <header className="App-header">
                <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀
                <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀
                <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>⠀⠀
            </header> 
            </div>            
            <body className="App-body">
                <h1>404 Resource Not Found</h1>
            </body>
            <footer className="App-footer">
            <br></br>
                <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀
                <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀
                <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
        </footer>
        </div>
    );
};

export default PageNotFound;