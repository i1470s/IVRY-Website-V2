/*Imports*/
import React from "react";
import { useSelector } from "react-redux";

/*Image Imports*/
import home from './images/home.svg';
import store from './images/store-highlighted.svg';
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
                      <br/>
                      <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Store <small style={{fontSize: "15px"}}>- All Prices in CAD / Dm i1470s#0396</small></h1>

                      <h2>Welcome {currentUser.username}</h2>
                      
                      <div class="list-shop"><h4>GTAV Recoverys</h4> <p>Stock: Varies</p><p>Price: $5 - $30</p> <a href="/store/recoverys#GTA"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "120px", minWidth: "100px", fontSize: "20px"}}>Options</button></a></div>
                      <div class="list-shop2"><h4>RDR2 Recoverys</h4> <p>Stock: Varies</p><p>Price: $10 - $50</p> <a href="/store/recoverys#RDR"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "120px", minWidth: "100px", fontSize: "20px"}}>Options</button></a></div> 
                      <div class="list-shop3"><h4>Discord Nitro</h4> <p>Stock: 0</p><p>Price: $5.50</p> <button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "130px", minWidth: "100px", fontSize: "20px"}} data-sellix-product="5f643a59f027a" type="submit">Purchase</button></div> 
                      <div class="list-shop4"><h4>Custom Discord Bot</h4> <p>Price: $25</p> <button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "130px", minWidth: "100px", fontSize: "20px"}} data-sellix-product="6083c9146e422" type="submit">Purchase</button></div>  
                      <div class="list-shop4"><h4>Hire Us</h4> <p>Price: Varies</p> <a href="https://linktr.ee/brayden_viana"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "120px", minWidth: "100px", fontSize: "20px"}}>Contact</button></a></div>
                      <div class="list-shop5"><h4>Donations</h4> <p>Price: Varies</p> <a href="https://www.paypal.com/donate?hosted_button_id=QWT56W6DFV8H4"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "120px", minWidth: "100px", fontSize: "20px"}}>Donate</button></a></div>
                </body>
            </div>
            
            
            
            <div id="Footer">
                <footer className="App-footer">
                      <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/learn"><img width="30px" height="40px" alt="search" src={learn}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/store"><img width="30px" height="30px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
                </footer>
            </div>
        </div>
        
    );
};

export default Store;