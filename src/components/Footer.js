import React from 'react'
import '../components/Footer.css'
import { FaPaperPlane } from "react-icons/fa";
import image from '../assets/unnamed__2_-removebg-preview.png'

const Footer = () => {
  return (
    <div className='footer'>
        <h3>Subscribe To Our Newletter</h3>
        
        <div className='newletter'>
      <input type="email" placeholder="type your email"/>
      <button className="btn">
        <FaPaperPlane size={15} /> 
      
      </button>
      </div>
     
      
      <div className='contact'>
        <div>
        <a href='#'><img src={image}/></a>
        </div>
        <div>
      <h4>Contact Us</h4>
      <p>Jason Moyo Street,Bulawayo</p>
      <p>+263 712 335 528</p>
      <p>nando@gmail.com</p>
      <p>Sun-Sat/9AM-11:00PM</p>
        </div>

        <div className='links'>
            <h4>Links</h4>
        <nav className='nav-list'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Locations</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>News</a></li>
            </ul>

        </nav>
        </div>

        <div>
        <h4>Instagram Gallery</h4>
      
        </div>
    </div>
    </div>
  )
}

export default Footer
