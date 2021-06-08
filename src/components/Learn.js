/*Imports*/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/*Image Imports*/
import home from './images/home.svg';
import store from './images/store.svg';
import search from './images/search.svg';
import learn from './images/learn.svg';

/*CSS Imports*/
import './css/styles.scss';


/*REACT START*/


const Learn = () => {
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
                      <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Tutorials</h1>
                      <h3>Welcome {currentUser.username}</h3>

                      <div class="list-learn"><h4>COMING SOON</h4> <a href="#"><button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>View</button></a></div>
                      <div class="list-learn"><h4>COMING SOON</h4> <a href="#"><button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>View</button></a></div>
                      <div class="list-learn"><h4>COMING SOON</h4> <a href="#"><button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>View</button></a></div>
                </body>
            </div>
            
            
            
            <div id="Footer">
                <footer className="App-footer">
                      <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/learn"><img style={{opacity: ".5"}} width="30px" height="40px" alt="search" src={learn}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
                </footer>
            </div>
        </div>
    );
};

export default Learn;