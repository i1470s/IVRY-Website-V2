import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserService from "../services/user.service";

import "./css/styles.scss";

import dm from "./images/dm.svg";
import user from "./images/user.svg";
import learn from "./images/learn.svg";
import home from "./images/home.svg";
import store from "./images/store.svg";
import search from "./images/search.svg";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


const Support = () => {
  const required = (value) => {
    if (!value) {
      return (
        <div style={{color: "white"}} role="alert">
          This field is required!
        </div>
      );
    }
  };
  

  const { user: currentUser } = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div id="Page" className="App">

      
      <div id="Nav-bar" className="nav">
        <header className="App-header">
              <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a> <a style={{float: "right", margin: "10px"}} href="/profile/chats"><img width="30px" height="30px" alt="dm" src={dm}/></a> <a style={{float: "right", margin: "10px", color: "white"}} href="/profile"><img width="30px" height="30px" alt="user" src={user}/></a>  
        </header>
      </div>
      
      

      <div id="Content">
        <body className="App-body">
              <br/>
              <br/>
              <br/>
              <br/>
              <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Support</h1>
              <h3>Welcome {currentUser.username}</h3>
              <br/>
              <div className="col-md-12">
              <div className="card card-container">
                <img
                  src="https://ivry.tk/favicon.ico"
                  alt="profile-img"
                  className="profile-img-card"
                  />
                  
              <Form style={{width: "300px"}} name="contact" method="POST" data-netlify="true">

                    <div><label>Your Username</label> <Input style={{color: "black", background: "#fff", border: "1px #000 solid", borderRadius: "5px", width: "280px"}} validations={[required]} placeholder="Username" type="text" name="name" /> </div>

                    <div><label>Your Email</label> <Input style={{color: "black", background: "#fff", border: "1px #000 solid", borderRadius: "5px", width: "280px"}} validations={[required]} placeholder="Email" type="email" name="email" /></div>

                    <div><label>Your Problem</label></div>

                    <div><select style={{marginLeft: "-210px"}} name="role[]" multiple>
                    <option value="account">Account</option>
                    <option value="purchase">Purchase</option>
                    <option value="bug">Bug Report</option>
                    <option value="other">Other</option>
                    </select></div>

                    <div><label>Please provide info</label><textarea style={{color: "black", background: "#fff", border: "1px #000 solid", borderRadius: "5px", width: "280px", height: "40px", maxWidth: "280px", minWidth: "280px", minHeight: "40px", maxHeight: "75px"}}  validations={[required]} placeholder="Some detailed info about your problem" name="message"></textarea></div>
                    <br/>
                    <div><button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} type="submit">Submit</button></div>
              </Form>
            </div>
            </div>
        </body>
      </div>
      
      
      
      <div id="Footer">
        <footer className="App-footer">
              <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/learn"><img width="30px" height="40px" alt="learn" src={learn}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
              <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
        </footer>
      </div>
    </div>
  );
}

export default Support;
