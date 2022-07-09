import React, { useState } from "react";
import "../src/login.css";
import { signUp, loginuser, logout, useAuth } from "../src/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useAuth();

  const login = async () => {
    await signUp(email, password);
  };

  const logOut = async () => {
    try {
      await logout();
    } catch {
      alert("error");
    }
  };

  const getInuser = async () => {
    await loginuser(email, password);
  };

  return (
    <>
      <div className="main-div">
        <h1>firebase login in : {currentUser?.email}</h1>
        <input
          type="email"
          placeholder="email.."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password.. (6 Letters and up)"
          onChange={(e) => setPassword(e.target.value)}
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
