import React from 'react';
import './css/trainer.css';
import { BsFacebook,BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

// import {CreateContext} from '../DataContext';

const Trainer = () => {
  const objTrainer = [
    {
    id: 201,
    name: "Rohan Roy",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require('../img/fitnessh.png'),
    },
    {
    id: 202,
    name: "Abhinav Jha",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require('../img/fitnessh.png'),
    },
    {
    id: 203,
    name: "Akriti Kashayp",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require("../img/trainer2.png"),
    },
    {
    id: 204,
    name: "Vivek Gaur",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require('../img/fitnessh.png'),
    },
    {
    id: 205,
    name: "Simmon Turner",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require('../img/fitnessh.png'),
    },
  
    {
    id: 206,
    name: "Alexender Dee",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require('../img/fitnessh.png'),
    },
    {
    id: 207,
    name: "Shanskriti Singh",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require("../img/trainer2.png"),
    },
    {
    id: 208,
    name: "Jimmy Johnson",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require('../img/fitnessh.png'),
    },
    {
    id: 209,
    name: "Shivani Garg",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require("../img/trainer2.png"),
    },
    {
    id: 210,
    name: "Aman Pandey",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem et tortor consequat id porta nibh.",
    avatar: require('../img/fitnessh.png'),
    },
  ]

  
  return (
    <div className='trainer-containers'>
      <div className='trainer-show'>
      </div>
      <div className='trainer-box'>
        <h1>Trainers</h1>
        <div className='trainer-details'>
        { 
          objTrainer.map((data) =>{
          return (
            <div className='trainer-card' key={data.id}>
            <img src={data.avatar} alt={data.avatar}/>
            <h2>{data.name}</h2>
            <span><BsFacebook/></span>
            <span><AiFillInstagram/></span>
            <span><BsLinkedin/></span>
            <p>{data.summary}</p>
          </div>
          )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Trainer