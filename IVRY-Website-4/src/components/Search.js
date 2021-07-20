/*Imports*/
import React from "react";
import { useSelector } from "react-redux";

/*Image Imports*/
import home from './images/home.svg';
import store from './images/store.svg';
import search from './images/search-highlighted.svg';
import learn from './images/learn.svg';

/*CSS Imports*/
import './css/styles.scss';


/*REACT START*/


const Search = () => {
const { user: currentUser } = useSelector((state) => state.auth);
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
                      <br/>
                      <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Search</h1>
                      <h2>Welcome {currentUser.username}</h2>
                      <br/>

                      <form id="form" role="search" method="get" action="http://www.google.com/search" target="_blank">
                      <input type="hidden" name="sitesearch" value="ivry.tk" />
                      <input style={{marginTop: "40px", width: "365px"}} type="search" maxlength="255" id="query" name="q" placeholder="Search..." autofocus required /> 
                      </form>
                      
                    
                </body>
            </div>
            
            
            
            <div id="Footer">
                <footer className="App-footer">
                      <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/learn"><img width="30px" height="40px" alt="search" src={learn}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/search"><img width="30px" height="30px" alt="search" src={search}/></a>
                </footer>
            </div>
        </div>
    );
}

export default Search;