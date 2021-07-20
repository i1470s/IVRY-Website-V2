/*Imports*/
import React from "react";

/*Image Imports*/
import home from './images/home.svg';
import store from './images/store.svg';
import search from './images/search.svg';
import learn from './images/learn.svg';
import user from './images/user.svg';
import dm from './images/dm-highlighted.svg'

/*CSS Imports*/
import './css/styles.scss';


/*REACT START*/


const Chats = () => {
    return (
      <div id="Page" className="App">
        
        
        
        <div id="Nav-bar" className="nav">
          <header className="App-header">
                <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a> <a style={{float: "right", margin: "10px"}} href="/profile/chats"><img width="30px" height="30px" alt="dm" src={dm}/></a> <a style={{float: "right", margin: "10px"}} href="/profile"><img width="30px" height="30px" alt="user" src={user}/></a>  
          </header>
        </div>
        
        

        <div id="Content">
          <body className="App-body">
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Messages</h1>
                <h2>Dms Coming Soon</h2>
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

  export default Chats;