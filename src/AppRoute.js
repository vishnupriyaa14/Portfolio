import React, { Component } from 'react'; import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Contact from './Contact';
// import './App.css'; 

class AppRoute extends Component { render() {
     return (
         <Router>
            <div className="App" style={{ textAlign: 'center' }}>
  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
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
      <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
    </li>
  </ul>

            {/* <div className="App"> 
                <ul className="App-header"> 
                    <li> <Link to="/">Home</Link> </li>
                     <li> <Link to="/about">About </Link> </li>
                      <li> <Link to="/skill">Skill</Link> </li>
                      <li> <Link to="/contact">Contact </Link> </li>
                       </ul>  */}
                      <Routes> 
                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/about' element={<About />}></Route> 
                        <Route exact path='/skill' element={<Skill />}></Route>
                        <Route exact path='/contact' element={<Contact />}></Route>

                     </Routes> 
            </div>
         </Router> 
      );
    } 
 } 
    export default AppRoute;






