import './App.css' ;
import Navbar from './component/Navbar' ;
import Home from './component/Home' ;
import Contact from './component/content';
import About from './component/About';
import Signup from './component/signUp';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route  path="/" element={<Home />}/>
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
