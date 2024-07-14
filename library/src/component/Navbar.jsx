import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="bg-lightBlue p-4 w-full">
      <ul className="list-none flex justify-end items-center">
        <li className="mr-5"><Link to="/" className="no-underline text-black">Home</Link></li>
        <li className="mr-5"><Link to="/about" className="no-underline text-black">About</Link></li>
        <li className="mr-5"><Link to="/contact" className="no-underline text-black">Contact</Link></li>
        {isLoggedIn ? (
          <li className="mr-5"><button onClick={handleLogout} className="no-underline text-black">Logout</button></li>
        ) : (
          <li className="mr-5"><Link to="/signin" className="no-underline text-black">Sign In</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
