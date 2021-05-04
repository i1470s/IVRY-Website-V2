/*Imports*/
import React from "react";

/*Image Imports*/
import logo from '../components/images/logo.svg';
import discord from '../components/images/icon-discord.png';
import instagram from '../components/images/icon-instagram.png';
import twitter from '../components/images/icon-twitter.png';
import facebook from '../components/images/icon-facebook.png';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const MainPage = () => {
    return (
      <div className="App">
        <body style={{overflow: “hidden”}} className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <b><h1 style={{color: "#fb5804"}}>IVRY</h1></b>
          <b><a className="App-link" href="/home" rel="noopener noreferrer">Continue To Site</a></b>
          <b><p style={{fontSize: "12px"}}>V.3</p></b>
        </body>
        <footer className="App-footer">
            <br></br>
            <a href="https://discord.com/invite/ppn2U99"><img width="30px" height="30px" alt="Discord" src={discord}/></a>⠀
            <a href="https://www.instagram.com/Ivry_Network/"><img width="30px" height="30px" alt="Instagram" src={instagram}/></a>⠀ 
            <a href="https://www.twitter.com/Brayden_viana"><img width="30px" height="30px" alt="Twitter" src={twitter}/></a>⠀ 
            <a href="https://www.facebook.com/brayden.viana/"><img width="30px" height="30px" alt="Facebook" src={facebook}/></a><br></br><br></br>  
            <b>IVRY 2021 All Rights Reserved</b><br></br><br></br>
        </footer>
      </div>
    );
  }
  
  export default MainPage;