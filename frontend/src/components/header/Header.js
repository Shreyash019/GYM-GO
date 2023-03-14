import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import About from '../main/About';

const Header = () => {
  return (
  <div className='header-container'>
    <div className='head-left'>
      <p><Link to='/'>GYM-GO</Link></p>
    </div>
    <div className='head-right'>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/about" component={About}>About</Link></p>
      <p><Link to="/gallery">Gallery</Link></p>
      <p><Link to="/classes">Classes</Link></p>
      <p><Link to="/trainer" >Trainer</Link></p>
      <p><Link to="/price">Pricing</Link></p>
      <p><Link to="/schedules">Schedule</Link></p>
    </div>
  </div>
  )
}

export default Header