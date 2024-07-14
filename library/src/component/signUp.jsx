import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn({ handleLogin }) {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (name && password && email) {
      localStorage.setItem('name', name);
      localStorage.setItem('password', password);
      localStorage.setItem('email', email);
      localStorage.setItem('isLoggedIn', 'true');
      handleLogin();
      navigate('/');
    }
  };

  return (
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
      <button onClick={handleClick}>Sign In</button>
    </div>
  );
}

export default SignIn;
