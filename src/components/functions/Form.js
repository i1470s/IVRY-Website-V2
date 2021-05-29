import React from "react";

export default function Form() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">UserName</label> <br />
        <input type="text" id="name" name="name" required />
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
        <input type="submit" value="Submit password" />
      </p>
    </form>
  );
}