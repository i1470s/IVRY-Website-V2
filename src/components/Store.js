/*Imports*/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gtav from "./images/gtav.jpeg";

/*Image Imports*/
import home from './images/home.svg';
import store from './images/store.svg';
import search from './images/search.svg';
import learn from './images/learn.svg';

/*CSS Imports*/
import './css/styles.scss';

/*REACT START*/


const Store= () => {
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
                      <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Store</h1>

                      <h3 style={{color: "#fff"}}>Welcome {currentUser.username}</h3>
                      
                      <div style={{backgroundSize: "cover", backgroundImage: 'url(${gtav})'}} class="list-shop"><h4>GTAV Recoverys</h4> <p>Stock: Varies</p><p>Price: $5 - $30</p> <a href="#"><button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Options</button></a></div>
                      <div class="list-shop"><h4>RDR2 Recoverys</h4> <p>Stock: Varies</p><p>Price: $10 - $50</p> <a href="#"><button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Options</button></a></div> 
                      <div class="list-shop"><h4>Discord Nitro</h4> <p>Stock: 0</p><p>Price: $5.50</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} data-sellix-product="5f643a59f027a" type="submit">Purchase</button></div> 
                      <div class="list-shop"><h4>Custom Discord Bot</h4> <p>Price: $25</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} data-sellix-product="6083c9146e422" type="submit">Purchase</button></div>  
                      <div class="list-shop"><h4>Hire Us</h4> <p>Price: Varies</p> <a href="https://linktr.ee/brayden_viana"><button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Contact</button></a></div>
                      <div class="list-shop"><h4>Donations</h4> <p>Price: Varies</p> <a href="https://www.paypal.com/donate?hosted_button_id=QWT56W6DFV8H4"><button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Donate</button></a></div>

                      <h3 style={{color: "#fb5804"}}>Store Policy</h3>
                      <small>Welcome to our store, all our pices are in CAD(Canadian), we use sellix.io for secure and fast payment gateway for everyone of our products to help stop fraud, 
                      <br/>with over 30+ purchases in the past 3 months we think weve gained the trust of many 
                      <br/>and are able to show our selfs as fast, safe and lastly reliable,<br/>
                      please contact me on discord before any purchase i1470s#0396</small>
                </body>
            </div>
            
            
            
            <div id="Footer">
                <footer className="App-footer">
                      <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/learn"><img width="30px" height="40px" alt="search" src={learn}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/store"><img style={{opacity: ".5"}} width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
                </footer>
            </div>
        </div>
        
    );
};

export default Store;