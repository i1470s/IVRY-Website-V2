/*Imports*/
import React from "react";

/*Image Imports*/
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';
import learn from '../components/images/learn.svg';
import img from '../components/images/img.JPG'
import img2 from '../components/images/img2.JPG'

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const Ash = () => {
    return (
       <div id="Page" className="App">
            
            
            
            <div id="Nav-bar" className="nav" style={{height: "1000px"}}>
                <header className="App-header">
                    <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a>
                    <h1 style={{color: "white"}}>YOUR NOT ALLOWED TO SEE YET DORK</h1>
                    <h1 style={{color: "white"}}>So i made the page invisible ha, unless yk how to remove elements which i dont think you do so, guess what nerd bleh</h1>
                    <h1 style={{color: "white"}}>soon ill give you a password to get into this page but for now you dont get shit</h1>
                    <h1 style={{color: "white"}}>so come check back later bubbas</h1>
                </header>
            </div>   
            
            
            
            <div id="Content">         
                <body className="App-body" style={{height: "-50", width: "0"}}>
                      <h1>Your Feed</h1>
                      <b><p>Welcome to IVRY</p></b>
                      <b><p>December - 2020</p></b>
                      <small>The First Amazing Memories With Dorky </small>
                      <img src={img} className="card"/>
                      <b><p>January - 2021</p></b>
                      <small>EDIT ME </small>
                      <b><p>Febuary - 2021</p></b>
                      <small>EDIT ME </small>
                      <img src={img2} className="card"/>
                      <b><p>March - 2021</p></b>
                      <small>EDIT ME </small>
                      <b><p>April - 2021</p></b>
                      <small>EDIT ME </small>
                      <b><p>May - 2021</p></b>
                      <small>EDIT ME </small>
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

export default Ash;