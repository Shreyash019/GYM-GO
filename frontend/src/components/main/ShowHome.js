import React from 'react';
import {Link} from 'react-router-dom'
import './css/showhome.css';
import { CgArrowLongRightC } from "react-icons/cg";


import fitnessH from '../img/fitnessG.png'

const ShowHome = () => {
  return (
    <div className='showhome-container'>
        <div className='showhome-left'>
            <img src={fitnessH} alt='Fitness_home'/>
        </div>
        <div className='showhome-right'>
            <div className='showhome-right-content'>
              <h1>MAKE &nbsp;YOUR&nbsp; BODY</h1>
              <h2>FIT & PERFECT</h2>
              <button><i><Link to='/classes'>OUR CLASSES <CgArrowLongRightC/></Link></i></button>
            </div>
            
        </div>
    </div>
  )
}

export default ShowHome