/* import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Contact from './Contact';
import Projects from './Projects'; // ✅ Step 1: Import Projects

class AppRoute extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ textAlign: 'center' }}>
          <ul style={{
            listStyleType: 'none', padding: 0, margin: 0,
            display: 'flex', justifyContent: 'center'
          }}>
            <li style={{ margin: '0 15px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/skill" style={{ textDecoration: 'none', color: 'black' }}>Skill</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/projects" style={{ textDecoration: 'none', color: 'black' }}>Projects</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/skill' element={<Skill />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default AppRoute;  */



import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';
import './App.css'; // optional

class AppRoute extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        {/* Scroll Nav */}
        <ul style={{
          listStyleType: 'none', padding: 0, margin: 0,
          display: 'flex', justifyContent: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 1000
        }}>
          <li style={{ margin: '0 15px' }}><a href="#home" style={{ textDecoration: 'none', color: 'black' }}>Home</a></li>
          <li style={{ margin: '0 15px' }}><a href="#about" style={{ textDecoration: 'none', color: 'black' }}>About</a></li>
          <li style={{ margin: '0 15px' }}><a href="#skill" style={{ textDecoration: 'none', color: 'black' }}>Skills</a></li>
          <li style={{ margin: '0 15px' }}><a href="#projects" style={{ textDecoration: 'none', color: 'black' }}>Projects</a></li>
          <li style={{ margin: '0 15px' }}><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</a></li>
        </ul>

        {/* Sections with IDs */}
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skill"><Skill /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
    );
  }
}

export default AppRoute;

