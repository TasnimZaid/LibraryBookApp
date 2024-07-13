import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Contact from "./content";

// function SignIn() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   const data = useRef();

//   const handleSignIn = () => {
//     const name = data.current.value;
//     localStorage.setItem("userName", name);
//     setUserName(name);
//     setLoggedIn(true);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("userName");
//     setUserName("");
//     setLoggedIn(false);
//   };

//   const isLoggedIn = localStorage.getItem("userName") !== null;

//   return (
//     <div>
//       {loggedIn ? (
//         <div>
//           <p>Welcome, {userName}!</p>
          
//           <button onClick={handleSignOut}>Sign Out</button>
//         </div>
//       ) : (
//         <div>
//           <input ref={data} placeholder="Enter your name" />
//           <button onClick={handleSignIn}>Sign In</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SignIn;

function SignIn() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const localStorageGet = localStorage.getItem("signUp");
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    if (localStorageGet) {
      setShowHome(true);
    }
  }, [localStorageGet]); // Ensure useEffect runs when localStorageGet changes

  const handleClick = () => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (name && password && email) {
      localStorage.setItem('name', name);
      localStorage.setItem('password', password);
      localStorage.setItem('email', email);
      localStorage.setItem('signUp', email); // Consider using a more unique key for multiple sign-ups

      setShowHome(true);
    }
  };

  return (
    <div>
      {showHome ? (
        <Contact/>
      ) : (
        <div className="container">
          <div className="input-space">
            <input placeholder="Name" type="text" ref={nameRef} />
          </div>
          <div className="input-space">
            <input placeholder="Email" type="text" ref={emailRef} />
          </div>
          <div className="input-space">
            <input placeholder="Password" type="password" ref={passwordRef} />
          </div>
          <button onClick={handleClick}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default SignIn;