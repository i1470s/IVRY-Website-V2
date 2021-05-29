import React from "react";

export default function Form() {
  return (
    <form name="contact" method="post" action="/home/user">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Username</label> <br />
        <textarea type="text" id="name" name="name" required></textarea>
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label> <br />
        <input id="password" name="password" required></input>
      </p>
      <p>
        <input id="login-form-submit" type="submit" value="Submit name" />
      </p>
    </form>
  );
}