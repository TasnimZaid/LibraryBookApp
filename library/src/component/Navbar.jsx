import { Link } from "react-router-dom";
import React from 'react';

function Navbar() {


  return (
    <nav>
        <ul>
            <li>
               <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="./About">About</Link>
            </li>
            <li>
              <Link to="./Contact">Contact</Link>
            </li>
            <li>
            <Link to="./Signup">Sign Up
            
            </Link>

            </li>
        </ul> 
    </nav>
  );
}

export default Navbar;