import React from 'react';
import footerCSS from './footer.module.css';
import { BsYoutube, BsFacebook,BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className={footerCSS.footerContainer}>
      <div className={footerCSS.footerBox}>
        <div className={footerCSS.footerLeft}>
          <h1>GYM-GO</h1>
          <hr/>
          <p>Take your health and body to the next level with our comprehensive program designed to help you to reach fitness goals.</p>
          <span><BsYoutube/></span>
          <span><BsFacebook/></span>
          <span><AiFillInstagram/></span>
          <span><BsLinkedin/></span>
        </div>
        <div className={footerCSS.footerMid}>
          <h2>Our Classes</h2>
          <hr/>
          <p>Fitness Classes</p>
          <p>Aerobics Classes</p>
          <p>Boxing Classes</p>
          <p>Power Yoga</p>
          <p>Learn Machines</p>
          <p>Full-Body Strength</p>
        </div>
        <div className={footerCSS.footerRight}>
          <h2>Working Hours</h2>
          <hr/>
          <h5>Monday-Friday</h5>
          <p>6:00am - 20:00pm</p>
          <h5>Saturday</h5>
          <p>6:00am - 16:00pm</p>
          <h5>Sunday</h5>
          <p>Closed</p>
        </div>
      </div>
  </div>
  )
}

export default Footer