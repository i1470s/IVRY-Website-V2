/*Imports*/
import React from "react";

/*Image Imports*/
import home from '../components/images/home.svg';
import store from '../components/images/store.svg';
import search from '../components/images/search.svg';
import learn from '../components/images/learn.svg';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const SearchPage = () => {
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
                      <form onsubmit="event.preventDefault();" role="search">
                      <input id="search" type="search" placeholder="Search..." autofocus required />
                      </form>
                      <h1>Search</h1>
                      <b><p>Coming Soon</p></b>

                      <iframe width="100%" src="https://f1.wewon.to/a/extra/t2/all-rise/s01e03.mp4?valid=huJULqqPGycZ6HWZU1XF3A&t=1621398070&dz=52536C487A556C497A54314C7A546C4545&cz=71765161495954694F786C68496D2D6764"></iframe>
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

export default SearchPage;
