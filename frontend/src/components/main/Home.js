import React from 'react';
import ShowHome from './ShowHome';
import DetailHome from './DetailHome';
import Classes from './classes/Classes';
import Trainer from './Trainer'; 
import Schedule from './Schedule';
import Pricing from './Pricing';

const Home = () => {
  return (
    <div>
      <ShowHome/>
      <DetailHome/>
      <Classes/>
      <Trainer/>
      <Pricing/>
      <Schedule/>
    </div>
  )
}

export default Home