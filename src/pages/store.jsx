/*Imports*/
import React from "react";

/*Image Imports*/
import logo from '../components/images/logo.svg';
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';
import discord from '../components/images/icon-discord.png';
import instagram from '../components/images/icon-instagram.png';
import twitter from '../components/images/icon-twitter.png';
import facebook from '../components/images/icon-facebook.png';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const StorePage = () => {
    return (
        <div className="App">
            <div className="nav">
            <header className="App-header">
                <a href="/home"><img width="41px" height="41px" alt="Logo" src={logo}/></a>⠀
                <a style={{marginLeft: "215px"}} href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀
                <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀
                <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>⠀
            </header>
            </div>
            <body className="App-body">
                <h1>Store</h1>
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
};

export default StorePage;