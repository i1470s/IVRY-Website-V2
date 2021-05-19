/*Imports*/
import React from "react";

/*Image Imports*/
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';
import learn from '../components/images/learn.svg';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const SearchPage = () => {
    return (
        <div id="Page" className="App">
            
            
            
            <div id="Nav-bar" className="nav">
                <header className="App-header">
                        <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a>
                </header>
            </div>   
            
            
            
            <div id="Content">         
                <body className="App-body">
                      <br/>
                      <br/>
                      <br/>
                      <form class="Oflox-Search-box" role="search" method="get"
                      action="www.yourwebsite.com"><input type="search" id="oflox-block-
                      search__input-3" class="Oflox-Search-box" name="s" value="" 
                      placeholder="Search Here..."><button type="submit" class="oflox-
                      search__button">Search</button></form>
                      <h1>Search</h1>
                      <b><p>Coming Soon</p></b>
                </body>
            </div>
            
            
            
            <div id="Footer">
                <footer className="App-footer">
                      <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/learn"><img width="30px" height="40px" alt="search" src={learn}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
                </footer>
            </div>
        </div>
    );
};

export default SearchPage;
