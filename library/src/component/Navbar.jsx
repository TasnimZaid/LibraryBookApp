import { Link } from "react-router-dom";
import React from 'react';


const Navbar = () => {
    return (
      <nav className="navbar" style={{ 
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
      }}>
        <ul style={{ 
          listStyleType: 'none',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
          <li style={{ marginRight: '20px' }}><a href="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</a></li>
          <li style={{ marginRight: '20px' }}><a href="/about" style={{ textDecoration: 'none', color: '#fff' }}>About</a></li>
          <li style={{ marginRight: '20px' }}><a href="/contact" style={{ textDecoration: 'none', color: '#fff' }}>Contact</a></li>
          <li style={{ marginRight: '20px' }}><a href="/signup" style={{ textDecoration: 'none', color: '#fff' }}>Signup</a></li>
        </ul>
      </nav>
    );
  }

export default Navbar;
