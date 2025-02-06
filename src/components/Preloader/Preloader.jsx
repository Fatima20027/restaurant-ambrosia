import React from 'react';
import './Preloader.css';
import animation from '../../assets/Animation2.gif'; 
const Preloader = () => {
  return (
    <div className='preloader'>
      
      <h1>AMPROSIA</h1>
      <p>BRASSERIE & BAR</p>
      <img src={animation} alt="animation-gif" />
      
      
    </div>
  )
}

export default Preloader
