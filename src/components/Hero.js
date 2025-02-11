import React from 'react'
import '../components/Hero.css'
import image from '../assets/unnamed-removebg-preview.png'
import { FaFire } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='hero_container'>
      <div className='hero-content'>
        <h1>Your Next Craving Starts Here</h1>
        <p>Welcome to Nando's-the home of flame-grilled perfection</p>
         <button className='btn'> Explore</button>
         <div className='fire-container'>
           <FaFire size={90} color='red' className='fire' />
           <div className='image'> <img src={image} alt='logo' /></div>
         </div>
   
        
        
      </div>
         
  
        </div >
      
   
  )
}

export default Hero
