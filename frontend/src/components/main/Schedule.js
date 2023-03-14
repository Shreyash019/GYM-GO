import React, { useContext, useState, useEffect} from 'react';
import './css/schedule.css';
import { GiBoxingGloveSurprise, Gi3DStairs, GiWeightLiftingUp, GiPerson } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { BiCycling } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { FaRunning, FaSwimmer } from "react-icons/fa";

// import {CreateContext} from '../DataContext';

const Schedule = () => {
  const objSchedule = [
    {
    id: 401,
    classG: 'Cycling',
    time: '7:00 am',
    trainers: 'Rohan Roy & Akriti Kashayp',
    symbol: <BiCycling/>,
    },
    {
    id: 402,
    classG: 'Running',
    time: '6:00 am',
    trainers: 'Abhinav Jha',
    symbol: <FaRunning/>,
    },
    {
    id: 403,
    classG: 'Swimming',
    time: '10:00 am',
    trainers: 'Alexender Dee',
    symbol: <FaSwimmer/>,
    },
    {
    id: 404,
    classG: 'Boxing',
    time: '2:00 am',
    trainers: 'Simmon Turner',
    symbol: <GiBoxingGloveSurprise/>,
    },
    {
    id: 405,
    classG: 'Power Lifting',
    time: '9:00 am & 3:00 pm',
    trainers: 'Vivek Gaur',
    symbol: <GiWeightLiftingUp/>,
    },
    {
    id: 406,
    classG: 'Workout',
    time: '6:00 am & 6:00 pm',
    trainers: 'Jimmy Johnson',
    symbol: <CgGym/>,
    },
    {
    id: 407,
    classG: 'Cardio',
    time: '7:00 pm & 7:00 pm',
    trainers: 'Shivani Garg',
    symbol: <Gi3DStairs/>,
    },
    {
    id: 408,
    classG: 'Yoga',
    time: '6:00 am',
    trainers: 'Shanskriti Singh',
    symbol: <GrYoga/>,
    },
  ]

  return (
    <div className='schedule-container'>
    <div className='pring-show'>
      <div>

      </div>
    </div>
    <div className='schedule-box'>
    <h1>Schedules</h1>
      {
        objSchedule.map((data)=>{
          return (
            <div className='schedule-card' key={data.id}>
              <h3>{data.symbol}</h3>
              <h2>{data.classG}</h2>
              <p><GiPerson/>{data.trainers}</p>
              <p>🕜 {data.time}</p>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default Schedule