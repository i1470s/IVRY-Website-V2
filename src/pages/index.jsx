/*Imports*/
import React from "react";

/*Image Imports*/
import logo from '../components/images/icon.svg';

/*CSS Imports*/
import '../components/css/App.css';


/*REACT START*/


const MainPage = () => {
    return (
      <div id="Page" className="App">
      
      
      
        <div id="Content"> 
          <body className="App-body">
                <img src={logo} className="App-logo" alt="logo" />
                <b><h1 style={{color: "#fb5804"}}>IVRY</h1></b>
                <b><p style={{fontSize: "12px"}}>V.3.alpha</p></b>
                <b><a className="App-link" href="/home" rel="noopener noreferrer">Continue To Site</a></b>
          
          <script>
               document.addEventListener('touchmove',
                function(e) {
                 e.preventDefault();
                 }, {passive:false});
          </script>
          </body>
        </div>
      </div>
    );
  }
  
  export default MainPage;