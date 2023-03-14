import React from 'react';
import './css/classes.css';
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
    <div className='classes-container'>
      <div className='classes-title'>
        <h2>OUR CLASSES</h2>
        <p>We Are Offering Best Flexible Classes</p>
      </div>
      <div className='classes-card-conatiner'>
        <div className='classes-card' style={{backgroundImage: `url(${cycling})`}}>
          <div className="class-card-details"> 
              <h3>Cycling</h3>
              <hr/>
              <span>Rohan Roy & Akriti Kashayp</span><p>🕧 7:00 AM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='classes-card' style={{backgroundImage: `url(${running})`}}>
          <div className="class-card-details">
              <h3>Running</h3>
              <hr/>
              <span>Abhinav Jha</span><p>🕧 6:00 AM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='classes-card' style={{backgroundImage: `url(${swimming})`}}>
          <div className="class-card-details">
              <h3>Swimming</h3>
              <hr/>
              <span>Alexender Dee</span><p>🕧 10:00 AM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='classes-card' style={{backgroundImage: `url(${boxing})`}}>
          <div className="class-card-details">
              <h3>Boxing</h3>
              <hr/>
              <span>Simmon Turner</span><p>🕧 2:00 PM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='classes-card' style={{backgroundImage: `url(${powerlifting})`}}>
          <div className="class-card-details">
              <h3>Power Lifting</h3>
              <hr/>
              <span>Vivek Gaur</span><p>🕧 9:00 AM & 3:00 PM</p>
              <button>Join Now</button>
            </div>
        </div>

        <div className='classes-card' style={{backgroundImage: `url(${workout})`}}>
          <div className="class-card-details">
            <h3>Workouts</h3>
            <hr/>
            <span>Jimmy Johnson</span><p>🕧 6:00 AM & 6:00 PM</p>
            <button>Join Now</button>
          </div>
        </div>

        <div className='classes-card' style={{backgroundImage: `url(${cardio})`}}>
          <div className="class-card-details">
            <h3>Cardio</h3>
            <hr/>
            <span>Shivani Garg</span><p>🕧 7:00 AM & 7:00 PM</p>
            <button>Join Now</button>
          </div>
        </div>

        <div className='classes-card' style={{backgroundImage: `url(${yoga})`}}>
          <div className="class-card-details">
            <h3>Yoga</h3>
            <hr/>
            <span>Shanskriti Singh</span><p>🕧 6:00 AM</p>
            <button>Join Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Classes