import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    // TODO: Handle login logic
  };

  return (
    <div id="login">
      <header id="header">
      <nav className="navbar">
        <a href="">Home</a>
        <button onClick="">Sign Up</button>
      </nav>
      </header>
      <h1>Geriatic Cancer Patient Assessment</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} id="block">
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const LoginPage = () => {
  const [currentform, setCurrentform] = useState("Login");
  return (
    <div id="loginpage">
      <Login />
    </div>
  );
};

export default LoginPage;
