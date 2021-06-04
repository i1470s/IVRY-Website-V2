/*Imports*/
import React from "react";

/*Image Imports*/
import home from './images/home.svg';
import store from './images/store.svg';
import search from './images/search.svg';
import learn from './images/learn.svg';

/*CSS Imports*/
import './css/styles.scss';


/*REACT START*/


const Store= () => {
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

                      <h4 style={{color: "#fb5804"}}>GTAV Recoverys</h4>
                      
                      <div class="store-row">
                      <h4 class="store-list">Mini Recovery <br/><br/><br/> <b>$5</b> <br/><br/> <a class="store-button" data-sellix-product="5f63fa2d9728c" type="submit">Purchase</a></h4>
                      <h4 class="store-list">Basic Recovery <br/><br/><br/> <b>$10</b> <br/><br/> <a class="store-button" data-sellix-product="5f63fb45a9771" type="submit">Purchase</a></h4>
                      <h4 class="store-list">Pro Recovery <br/><br/><br/> <b>$15</b> <br/><br/> <a class="store-button" data-sellix-product="5f63fc353553c" type="submit">Purchase</a></h4>
                      </div>
                      <br/>

                      <div class="store-row">
                      <h4 class="store-list">Crazy Recovery <br/><br/><br/> <b>$20</b> <br/><br/> <a class="store-button" data-sellix-product="5f63fc365e6b5" type="submit">Purchase</a></h4>
                      <h4 class="store-list">Insane Recovery <br/><br/><br/> <b>$25</b> <br/><br/> <a class="store-button" data-sellix-product="5f63fc3a22742" type="submit">Purchase</a></h4>
                      <h4 class="store-list">Modded Account <br/><br/><br/> <b>$30</b> <br/><br/> <a class="store-button" data-sellix-product="5f63fd02368cc" type="submit">Purchase</a></h4>
                      </div>
                      <br/>

                      <h3 style={{color: "#fb5804"}}>Store Policy</h3>
                      <small>Welcome to our store, all our pices are in CAD(Canadian), we use sellix.io for secure and fast payment gateway for everyone of our products to help stop fraud, 
                      <br/>with over 30+ purchases in the past 3 months we think weve gained the trust of many 
                      <br/>and are able to show our selfs as fast, safe and lastly reliable.</small>

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