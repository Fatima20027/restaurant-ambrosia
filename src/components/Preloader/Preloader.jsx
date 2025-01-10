import React from 'react';
import './Preloader.css';
import animation from '../../assets/Animation2.gif'; 
const Preloader = () => {
  return (
    <div className='preloader'>
      <h1 className='load-title'>AMB<span style={{ fontFamily: "Quicksand, serif", fontWeight: "400"}}>R</span>OSIA</h1>
      
      <img src={animation} alt="animation-gif" />
      
      
    </div>
  )
}

export default Preloader
