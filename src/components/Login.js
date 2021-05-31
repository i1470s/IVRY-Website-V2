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
      <div className="alert alert-danger" role="alert">
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
      <div id="Nav-bar" className="nav">
      <header className="App-header">
              <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a>
      </header>   
      <br/>
      <br/>
      <br/>
      <body className="App-body">
      <h3 style={{color: "white", }}>Welcome To IVRY</h3>
      <small style={{color: "white"}}>Log into your account below, or create a new one!</small>

      <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form style={{width: "80%"}} onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label style={{color: "black"}} htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label style={{color: "black"}} htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span style={{color: "black"}}>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div style={{color: "black"}} className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          <br/>
          <small style={{color: "black"}}>Dont have an account?</small> <a href="/profile/signup">Signup</a>
        </Form>
      </div>
    </div>
    <p>⠀</p>
    <p>⠀</p>
    <p>⠀</p>
    <p>⠀</p>
    <p>⠀</p>
    <p>⠀</p>
    <p>⠀</p>
    <p>⠀</p>
    <p>⠀</p>
    <p>⠀</p>
    </body>
  </div>
  );
};

export default Login;
