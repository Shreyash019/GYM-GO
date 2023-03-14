import React, { useContext, useState, useEffect} from 'react';
import './css/pricing.css';

// import {CreateContext} from '../DataContext';

const Pricing = () => {

  const objPrice = [
    {
    id: 511,
    plan_name: "Basic",
    summary: "Workout, Cardio, Running, Yoga.",
    duration3: '3 Months',
    price_quaterly: 8000,
    duration6: '6 Months',
    price_haly_yearly: 14000,
    duration12: '1 Year',
    price_yearly: 25000,
    trainerSt: "No"
    },
    {
    id: 512,
    plan_name: "Intermediate",
    summary: "Workout, Cardio, Running, Power Lifting, Boxing, Yoga.",
    duration3: '3 Months',
    price_quaterly: 18000,
    duration6: '6 Months',
    price_haly_yearly: 31000,
    duration12: '1 Year',
    price_yearly: 55000,
    trainerSt: "Yes",
    },
    {
    id: 513,
    plan_name: "Pro",
    summary: "All the services included in this plan.",
    duration3: '3 months',
    price_quaterly: 25000,
    duration6: '6 Months',
    price_haly_yearly: 45000,
    duration12: '1 Year',
    price_yearly: 70000,
    trainerSt: "Yes",
    },
  ]

  return (
    <div className='pricing-container'>
      <div className='pring-show'>
        <div>

        </div>
      </div>
      <div className='pricing-box'>
        <h1>Pricing</h1>
        {
          objPrice.map((data)=>{
            return (
              <div className='pricing-card' key={data.id}>
                <h2>{data.plan_name}</h2>
                <h6><p>{data.duration3} </p><p>{data.price_quaterly}{' ₹ '}</p></h6>
                <br/>
                <h6><p>{data.duration6} </p><p> {data.price_haly_yearly}{' ₹ '}</p></h6>
                <br/>
                <h6><p>{data.duration12} </p><p> {data.price_yearly}{' ₹ '}</p></h6>
                <h5>Trainer : &nbsp;&nbsp;{data.trainerSt}</h5>
                <h5>Benifit : &nbsp;&nbsp;{data.summary}</h5>
                <button><b>Book</b></button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pricing