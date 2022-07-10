import React, { useState } from "react";
import "../src/login.css";
import { signUp, loginuser, logout, useAuth } from "../src/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useAuth();

  const login = async () => {
    setEmail("");
    setPassword("");
    await signUp(email, password);
  };

  const logOut = async () => {
    try {
      await logout();
    } catch {
      alert("error");
    }
  };

  const getInuser = () => {
    loginuser(email, password);
  };

  return (
    <>
      <div className="main-div">
        <h1>firebase login in : {currentUser?.email}</h1>
        <input
          type="email"
          placeholder="email.."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password.. (6 Letters and up)"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div>
          <button onClick={() => login()}>signUp </button>
        </div>
        <br />
        <div>
          <button onClick={() => logOut()}>Log out</button>
        </div>
        <br />
        <div>
          <button onClick={() => getInuser()}>Log in</button>
        </div>
      </div>
    </>
  );
}

export default Login;
