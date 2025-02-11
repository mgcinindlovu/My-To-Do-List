import React from 'react';
import '../components/FindUs.css';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div className='find-us'>
      <div>
        <h1>Find Your Nearest Nando's</h1>
        <p>Our Store Locator to find us in Zimbabwe</p>
      </div>

      <div className='btns'>
        <button className='btn1'>Locate A Restaurant</button>
        <button className='btn2'>Contact Us</button>
      </div>

      <div className='icons'>
        <a href="https://www.facebook.com/nandoszimbabwe/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className='icon' />
        </a>
        <a href="https://www.instagram.com/nandosuk/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className='icon' />
        </a>
        <a href="https://twitter.com/nandosuk" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className='icon' />
        </a>
        <a href="https://www.google.com/search?q=Nando's" target="_blank" rel="noopener noreferrer">
          <FaGoogle size={30} className='icon' />
        </a>
      </div>
    </div>
  );
};

export default FindUs;
