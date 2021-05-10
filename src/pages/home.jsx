/*Imports*/
import React from "react";

/*Image Imports*/
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';
import learn from '../components/images/learn.svg';
import user from '../components/images/user.svg'

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const HomePage = () => {
    return (
      <div id="Page" className="App">
        
        
        
        <div id="Nav-bar" className="nav">
          <header className="App-header">
                <a href="https://ivry.tk/"><b style={{ fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a> <b style={{color: "#fff", fontSize: "10px"}}>V.3.alpha</b>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<a href="/user"><img width="30px" height="30px" alt="search" src={user}/></a>
          </header>
        </div>
        
        
        
        <div id="Content">
          <body className="App-body">
                <br/>
                <br/>
                <br/>
                <h1>Home</h1>
                <b><p>Welcome to IVRY</p></b>
                <b><p>Were a group of Hackers / Coders learning new languages, and algorithms everyday, we offer a wide range of applications, products and services available to you in our shop and services sections. Whilst this is a website for IVRY and all our work, it is also my personal website if you have any questions or need support feel free to contact us at one of our socials linked at the bottem of the page, have a great day, and again welcome. IVRY Est. 1-24-2018</p></b>
                <a href="/404" className="card">API</a><a href="/404" className="card">API</a>
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
  }

  export default HomePage;