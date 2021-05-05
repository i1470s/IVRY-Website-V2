/*Imports*/
import React from "react";

/*Image Imports*/
import logo from '../components/images/logo.svg';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const MainPage = () => {
    return (
      <div className="App">
        <body className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <b><h1 style={{color: "#fb5804"}}>IVRY</h1></b>
          <b><p style={{fontSize: "12px"}}>V.3</p></b>
          <b><a className="App-link" href="/home" rel="noopener noreferrer">Continue To Site</a></b>
        </body>
      </div>
    );
  }
  
  export default MainPage;