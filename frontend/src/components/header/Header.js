import React from 'react';
import headerCSS from './header.module.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <div className={headerCSS.headerContainer}>
    <div className={headerCSS.headerLeft}>
      <p><Link to='/'>GYM-GO</Link></p>
    </div>
    <div className={headerCSS.headerRight}>
      <p><Link to="/">Home</Link></p>
      {/* <p><Link to="/about" component={About}>About</Link></p> */}
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