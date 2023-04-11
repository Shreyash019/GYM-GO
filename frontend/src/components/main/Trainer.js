import React from 'react';
import './css/topbox.css';
import './css/tranier.css';
import { BsFacebook,BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';


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
    <div className='parent-box-card'>
      <div className='top-show-box'>
        <h1>Trainers</h1>
      </div>
        <div className='card-conatiner'>
        { 
          objTrainer.map((data) =>{
          return (
            <div className='card-box1 trainer-details'style={{backgroundColor: "white"}} key={data.id}>
              <img src={data.avatar} alt={data.avatar}/>
              <h3 style={{margin: "0% 0% 5%", color: "black"}}>{data.name}</h3>
              <div className='.trainer-details-span'>              
                <span><BsFacebook/></span>
                <span><AiFillInstagram/></span>
                <span><BsLinkedin/></span>
              </div>

            </div>
          )
          })
        }
        </div>
    </div>
  )
}

export default Trainer