/*Imports*/
import React from "react";
import { useSelector } from "react-redux";

/*Image Imports*/
import home from './images/home.svg';
import store from './images/store.svg';
import search from './images/search.svg';
import learn from './images/learn-highlighted.svg';

/*CSS Imports*/
import './css/styles.scss';


/*REACT START*/


const Learn = () => {
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
                      <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Tutorials</h1>
                      <h2>Welcome {currentUser.username}</h2>

                      <div class="list-shop4"><h4>Coding</h4> <p>Coming Soon!</p> <p>Tutorials: 7</p> <a href="#"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "100px", minWidth: "100px", fontSize: "20px"}}>View</button></a></div>
                      <div class="list-learn"><h4>HomeBrew</h4> <p>Coming Soon!</p> <p>Tutorials: 3</p> <a href="#"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "100px", minWidth: "100px", fontSize: "20px"}}>View</button></a></div>
                      <div class="list-learn"><h4>Repair</h4> <p>Coming Soon!</p> <p>Tutorials: 1</p> <a href="#"><button style={{color: "white", background: "#fb5804", border: "2px #fb5804 solid", borderRadius: "25px", width: "100px", minWidth: "100px", fontSize: "20px"}}>View</button></a></div>
                </body>
            </div>
            
            
            
            <div id="Footer">
                <footer className="App-footer">
                      <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/learn"><img width="30px" height="30px" alt="search" src={learn}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
                </footer>
            </div>
        </div>
    );
};

export default Learn;