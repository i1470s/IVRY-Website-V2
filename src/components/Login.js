import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div style={{color: "white"}} role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <div id="Nav-bar" className="nav">
        <header className="App-header">
                <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a>
        </header>  
      </div>

      <body className="App-body">
      <br/>
      <h3 style={{color: "white", }}>Welcome To IVRY</h3>
      <small style={{color: "white"}}>Log into your account below, or create a new one!</small>

      <div className="col-md-12">
      <div className="card card-container">
        <img
          src="https://ivry.tk/favicon.ico"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form style={{width: "300px"}} onSubmit={handleLogin} ref={form}>
          <div>
            <label style={{color: "white"}} htmlFor="username">Username</label>
            <Input
              style={{color: "black", background: "#f7f7f7", border: "1px #000 solid", borderRadius: "5px", width: "300px"}}
              type="text"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
              placeholder="Username"
            />
          </div>

          <div>
            <label style={{color: "white"}} htmlFor="password">Password</label>
            <Input
              style={{color: "black", background: "#f7f7f7", border: "1px #000 solid", borderRadius: "5px", width: "300px"}}
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
              placeholder="Password"
            />
          </div>

          <div>
          <br/>
            <button style={{color: "white", background: "#222", border: "2px #fff solid", borderRadius: "5px"}} disabled={loading}>
              {loading && (
                <span style={{color: "white", background: "#222"}}></span>
              )}
              <span style={{color: "white", background: "#222"}}>Login</span>
            </button>
          </div>

          {message && (
            <div>
              <div style={{color: "white"}} role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          <br/>
          <small style={{color: "white"}}>Dont have an account?</small> <a href="/profile/signup">Signup</a>
        </Form>
        </div>
      </div>
      <br/>
    </body>
  </div>
  );
};

export default Login;
