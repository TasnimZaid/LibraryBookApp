import React, { useRef, useState } from "react";
import Navbar from "./Navbar";

function SignIn() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const data = useRef();

  const handleSignIn = () => {
    const name = data.current.value;
    localStorage.setItem("userName", name);
    setUserName(name);
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("userName");
    setUserName("");
    setLoggedIn(false);
  };

  const isLoggedIn = localStorage.getItem("userName") !== null;

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {userName}!</p>
          
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <input ref={data} placeholder="Enter your name" />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default SignIn;