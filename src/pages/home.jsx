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


const HomePage = () => {
    return (
      <div id="Page" className="App">
        
        
        
        <div id="Nav-bar" className="nav">
          <header className="App-header">
                <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a> <a style={{float: "right", margin: "10px"}} href="/home/user/dm"><img width="30px" height="30px" alt="dm" src={dm}/></a> <a style={{float: "right", margin: "10px"}} href="/home/user"><img width="30px" height="30px" alt="user" src={user}/></a>  
          </header>
        </div>
        
        

        <div id="Content">
          <body className="App-body">
                <br/>
                <br/>
                <br/>
                <h1 style={{color: "#fb5804", position: "absolute", left: "10px", top: "25px"}}>Home</h1>
                <h3>Welcome</h3>
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

  export default HomePage;