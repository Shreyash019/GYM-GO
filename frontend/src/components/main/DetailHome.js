import React from 'react';
import {Link} from 'react-router-dom';
import './css/detailHome.css';
import FitnessI from '../img/detImg.png';
import { GiProgression, GiStrongMan } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { BiDumbbell} from "react-icons/bi";
import { SiOpenaigym } from "react-icons/si";
import { FaDumbbell } from "react-icons/fa";


const DetailHome = () => {
  return (
    <div className='detailHome-container'>
        <div className='detail-card-container-top'>
            <div className='detail-card-content'>
                <h6><GiProgression/></h6>
                <h1>PROGRESSION</h1>
                <p>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p> 
            </div>
            <div className='detail-card-content'>
                <h6><FaDumbbell/></h6>
                <h1>WORKOUT</h1>
                <p>With a veriety of workouts to choose from, you'll have every thing you need to get into the best shape of your life.</p>
            </div>
            <div className='detail-card-content'>
                <h6><GoChecklist/></h6>
                <h1>NUTRITIONS</h1>
                <p>Out team will work with you to create a personilized meal plan that helps you reach your specific health.</p>
            </div>
        </div>
        <div className='detail-card-container-bottom'>
            <div className='bottom-detail-top'>
                <div className='bottom-detail-top-left'>
                    <span className='bottom-deatil-head'>We Are</span>
                    <h1>Take Your Health And Body To Next Level</h1>
                    <p>Take your health and body to the next level with our comprehensive program designed to help you to reach fitness goals.</p>
                    <div className='gym-detail-icon'><h6><GiStrongMan/></h6><h4>PROFESSIONAL TRAINER</h4></div>
                    <div className='gym-detail-icon'><h6><BiDumbbell/></h6><h4>GYM EQUIPMENT</h4></div>
                    <div className='gym-detail-icon'><h6><SiOpenaigym/></h6><h4>MODERN MACHINES</h4></div>
                    <button><Link to='/gallery'>Take a Tour</Link></button>
                </div>
                <div className='bottom-detail-top-right'>
                    <img src={FitnessI} alt='Fitness' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailHome