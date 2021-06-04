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


let count = 0;
count++;
if (count>6){
document.getElementById("signin").disabled = true;}


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
      <body className="App-body">
      <br/>
      <br/>
      <h1 style={{color: "#fb5804", }}>IVRY</h1>
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
                  <label style={{color: "white"}} htmlFor="username">Username</label>
                  <Input
                    style={{color: "black", background: "#fff", border: "1px #000 solid", borderRadius: "5px", width: "280px"}}
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                    placeholder="Username"
                  />
                </div>

                <div>
                  <label style={{color: "white"}} htmlFor="email">Email</label>
                  <Input
                    style={{color: "black", background: "#fff", border: "1px #000 solid", borderRadius: "5px", width: "280px"}}
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label style={{color: "white"}} htmlFor="password">Password</label>
                  <Input 
                    style={{color: "black", background: "#fff", border: "1px #000 solid", borderRadius: "5px", width: "280px"}}
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
                  <small style={{color: "white"}}>*Must Be 13 years or older to create an account*</small><br/><br/>
                  <small style={{color: "white"}}>By creating an account with us, you are agreeing to our <a href="/legal#Termsofservice">Terms of service</a> <a href="/legal#Privacypolicy">Privacy Policy</a></small><br/><br/>
                  <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} Id="signin">Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div>
                <div style={{color: "white"}} role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
            <br/>
            <small style={{color: "white"}}>Already have an account?</small> <a href="/profile/login">Login</a>
        </Form>
        </div>
      </div>
      <br/>
    </body>
  </div>
  );
};

export default Register;
