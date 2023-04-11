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
                <br/>
                <h1 style={{color: "red", fontSize: "4vw"}}><FaDumbbell/></h1>
                <h2>WORKOUT</h2>
                <p style={{margin: "0% 5% 10%"}}>With a veriety of workouts to choose from, you'll have every thing you need to get into the best shape of your life.</p>
            </div>
            <div className='detail-card-content'>
                <br/>
                <h1 style={{color: "red", fontSize: "4vw"}}><GoChecklist/></h1>
                <h2>NUTRITIONS</h2>
                <p style={{margin: "0% 5% 10%"}}>Out team will work with you to create a personilized meal plan that helps you to reach your specific health.</p>
            </div>
            <div className='detail-card-content'>
                <br/>
                <h1 style={{color: "red", fontSize: "4vw"}}><GiProgression/></h1>
                <h2>PROGRESSION</h2>
                <p style={{margin: "0% 5% 10%"}}>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p> 
            </div>
        </div>
        <div className='detail-card-container-bottom'>
            <div className='bottom-detail-top'>
                <div className='bottom-detail-top-left'>
                    <h1>Take Your Health And Body To Next Level</h1>
                    <p style={{margin: "5% 0%"}}>Take your health and body to the next level with our comprehensive program designed to help you to reach fitness goals.</p>
                    <div className='text-display'>
                        <div><h1><GiStrongMan/></h1><h4>PROFESSIONAL TRAINER</h4></div>
                        <div><h1><BiDumbbell/></h1><h4>GYM EQUIPMENT</h4></div>
                        <div><h1><SiOpenaigym/></h1><h4>MODERN MACHINES</h4></div>
                    </div>

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