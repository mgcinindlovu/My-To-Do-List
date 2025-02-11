import React, { useState } from 'react';
import image1 from '../assets/unnamed (1).jpg';
import image2 from '../assets/mm.png';
import image3 from '../assets/unnamed (4).jpg';
import image4 from '../assets/unnamed (5).jpg';
import image5 from '../assets/7up.png';
import './Drinks.css';

const Drinks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];
  const prices = ['$1', '$2', '$0.50', '$2', '$2'];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='drinks-menu'>
      <h1>Our Drinks Menu</h1>
      <div className='cards'>
        {images.map((image, index) => (
          <div key={index} className={`card ${index === activeIndex ? 'active' : ''}`}>
            <div>
              <img src={image} alt={`drink ${index + 1}`} />
            </div>
            <div className='prize'>{prices[index]}</div>
          </div>
        ))}
      </div>
      <div className='dots'>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
