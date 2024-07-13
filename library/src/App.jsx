import './App.css' ;
import Navbar from './component/Navbar' ;
import Home from './component/Home' ;
import Contact from './component/content';
import About from './component/About';
import Signup from './component/signUp';
import './index.css'; 

import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        width:"100%",
      }}>
        <Navbar />
        <div className='content' style={{ 
          width: '80%',
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#ffffff',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
