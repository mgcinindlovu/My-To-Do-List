import React from 'react'
import image from '../assets/pexels-karolina-grabowska-4084633-removebg-preview_1-removebg-preview.png'
import image1 from '../assets/pexels-karolina-grabowska-4084633-removebg-preview_3-removebg-preview.png'

import { FaFire } from'react-icons/fa'
import '../components/Promo.css'

const promo = () => {
  return (
    <div className='promo'>
        <div className='heading'>
            <div><h1>Our promos  </h1></div>
            <FaFire size={70} color='red' className='fire' />
        </div>
       
          

        <div className='cards'>
        
            <div className='card1' >
            <div className='image'>
            <img src={image} alt='logo'  />
            </div>
            
            </div>
    <div className='card'>
      <div><h3>Peri-per- galore</h3></div>
      <p>Immerse yourself in our famous peri-peri
        where golden opportunity meets flavour. Coming free
        with a variety of meals this january, you will
        not want to miss this.
      </p>
      <div ><button className='btn'>View Specials</button></div>
      </div>
      </div>
      <div className='cards'>
            <div className='card2'>
              <div className='images'>
              <div  >
            <img src={image} alt='logo' className='image' />
            </div>
            <div >
            <img src={image1} alt='logo' className='image1'  />
            </div>
            </div>
              </div>

           
          
<div className='card'>
      <h3>Spicy Friday</h3>
      <p>Explore goodness on Friday with a discounted meals
        offer of spicy foods, for the lovers
        of variety.Enjoy the spice of life with Nando's every Friday. 
      </p>
      <div ><button className='btn'>Pre Order</button></div>
      </div>
     
      </div>
    </div>
  )
}

export default promo
