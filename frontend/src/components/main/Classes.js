import React from 'react';
import './css/classes.css';
import './css/cardcontainer.css';
import './css/topbox.css';
import cycling from '../img/cycling.png';
import running from '../img/running.png';
import swimming from '../img/swimming.png';
import boxing from '../img/boxing.png';
import powerlifting from '../img/powerlifting.png';
import workout from '../img/workout.png';
import cardio from '../img/cardio.png';
import yoga from '../img/yoga.png';



const Classes = () => {
  return (
    <div className='parent-box-card'>
      <div className='top-show-box'>
        <h1>Classes</h1>
      </div>
      <div className='card-conatiner'>
        <div className='card-box' style={{backgroundImage: `url(${cycling})`}}>
          <div className="class-card-details"> 
              <h3>Cycling</h3>
              <hr/>
              <p>Rohan Roy</p><p>🕧 7:00 AM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='card-box' style={{backgroundImage: `url(${running})`}}>
          <div className="class-card-details">
              <h3>Running</h3>
              <hr/>
              <p>Abhinav Jha</p><p>🕧 6:00 AM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='card-box' style={{backgroundImage: `url(${swimming})`}}>
          <div className="class-card-details">
              <h3>Swimming</h3>
              <hr/>
              <p>Alexender Dee</p><p>🕧 10:00 AM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='card-box' style={{backgroundImage: `url(${boxing})`}}>
          <div className="class-card-details">
              <h3>Boxing</h3>
              <hr/>
              <p>Simmon Turner</p><p>🕧 2:00 PM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='card-box' style={{backgroundImage: `url(${powerlifting})`}}>
          <div className="class-card-details">
              <h3>Power Lifting</h3>
              <hr/>
              <p>Vivek Gaur</p><p>🕧 9:00 AM & 3:00 PM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='card-box' style={{backgroundImage: `url(${workout})`}}>
          <div className="class-card-details">
            <h3>Workouts</h3>
            <hr/>
            <p>Jimmy Johnson</p><p>🕧 6:00 AM & 6:00 PM</p>
            <button>Join Now</button>
          </div>
        </div>

        <div className='card-box' style={{backgroundImage: `url(${cardio})`}}>
          <div className="class-card-details">
            <h3>Cardio</h3>
            <hr/>
            <p>Shivani Garg</p><p>🕧 7:00 AM & 7:00 PM</p>
            <button>Join Now</button>
          </div>
        </div>

        <div className='card-box' style={{backgroundImage: `url(${yoga})`}}>
          <div className="class-card-details">
            <h3>Yoga</h3>
            <hr/>
            <p>Shanskriti Singh</p><p>🕧 6:00 AM</p>
            <button>Join Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Classes