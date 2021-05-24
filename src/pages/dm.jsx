/*Imports*/
import React from "react";

/*Image Imports*/
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';
import learn from '../components/images/learn.svg';
import user from '../components/images/user.svg';
import dm from '../components/images/dm.svg'

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const DMPage = () => {
    return (
      <div id="Page" className="App">
        
        
        
        <div id="Nav-bar" className="nav">
          <header className="App-header">
                <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a> <a style={{float: "right", margin: "10px", opacity: ".5"}} href="/home/user/dm"><img width="30px" height="30px" alt="dm" src={dm}/></a> <a style={{float: "right", margin: "10px"}} href="/home/user"><img width="30px" height="30px" alt="user" src={user}/></a>  
          </header>
        </div>
        
        

        <div id="Content">
          <body className="App-body">
                <br/>
                <br/>
                <br/>
                <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Messages</h1>
                <h1>Dms Coming Soon</h1>
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

  export default DMPage;