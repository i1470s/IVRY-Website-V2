import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div style={{color: "white"}} role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div style={{color: "white"}} role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div style={{color: "white"}} role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div style={{color: "white"}} role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div>
      <div id="Nav-bar" className="nav">
        <header className="App-header">
                <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a>
        </header>  
      </div>
    
      <body className="App-body">
      <br/>
      <br/>
      <h3 style={{color: "white", }}>Welcome To IVRY</h3>
      <small style={{color: "white"}}>Our service requires you to have an account, create on below or sign into an existing account!</small>
          
          <div className="col-md-12">
          <div className="card card-container">
          <img
            src="https://ivry.tk/favicon.ico"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form style={{width: "300px"}} onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <div>
                  <label style={{color: "black"}} htmlFor="username">Username</label>
                  <Input
                    style={{color: "black", background: "#f7f7f7", border: "1px #000 solid", borderRadius: "5px", width: "300px"}}
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                    placeholder="Username"
                  />
                </div>

                <div>
                  <label style={{color: "black"}} htmlFor="email">Email</label>
                  <Input
                    style={{color: "black", background: "#f7f7f7", border: "1px #000 solid", borderRadius: "5px", width: "300px"}}
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label style={{color: "black"}} htmlFor="password">Password</label>
                  <Input 
                    style={{color: "black", background: "#f7f7f7", border: "1px #000 solid", borderRadius: "5px", width: "300px"}}
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                    placeholder="Password"
                  />
                </div>

                <div>
                  <br/>
                  <button style={{color: "black", background: "white", border: "2px #000 solid", borderRadius: "5px"}}>Sign Up</button><br/>
                  <small style={{color: "black", fontSize: "20px"}}>By creating an account with us, you are agreeing to our <a href="#">Terms of service</a></small>
                </div>
              </div>
            )}

            {message && (
              <div>
                <div style={{color: "black"}} role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
            <br/>
            <small style={{color: "black"}}>Already have an account?</small> <a href="/profile/login">Login</a>
        </Form>
        </div>
      </div>
      <br/>
    </body>
  </div>
  );
};

export default Register;
