import React from 'react';
import './Preloader.css';
import animation from '../../assets/Animation2.gif'; 
const Preloader = () => {
  return (
    <div className='preloader'>
      
      
      <img src={animation} alt="animation-gif" />
      
      
    </div>
  )
}

export default Preloader
