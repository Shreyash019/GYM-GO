import React from 'react';
import './css/showhome.css';

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
              <button><i>OUR CLASSES</i></button>
            </div>
            
        </div>
    </div>
  )
}

export default ShowHome