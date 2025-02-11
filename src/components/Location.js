import React, { useState } from 'react';
import '../components/Locations.css';
import image1 from '../assets/unnamed (2).jpg';
import image2 from '../assets/unnamed (3).jpg';
import image3 from '../assets/pexels-nano-erdozain-120534369-19345991 1.jpg';
import image4 from '../assets/pexels-g-n-403098-13897888 1.jpg';
import image5 from '../assets/pexels-unkdevil-19331027 1.jpg';
import image6 from '../assets/🍗 Bang Bang Chicken Sandwich 🌶️ 1.jpg';
import image7 from '../assets/pexels-nano-erdozain-120534369-19345991 1.jpg';

const handleFindStoreClick = () => {
  window.open('https://www.google.com/maps/search/nandos+google+maps/@-17.8245188,31.056647,15z?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D', '_blank');
};

const Location = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentItem, setCurrentItem] = useState('');

  const items = [
    {
      name: "Fire Grilled Drumsticks",
      image: image2,
      price: "$11",
      description: "Enjoy mouthwatering drumsticks, perfectly seasoned and cooked to golden perfection. Tender, juicy, and full of flavor."
    },
    {
      name: "Onion Burger",
      image: image3,
      price: "$5",
      description: "Enjoy mouthwatering caramelized onions and a perfectly grilled patty. This burger is an authentic Nando's experience in every bite!"
    },
    {
      name: "1/4 Chicken",
      image: image4,
      price: "$11",
      description: "A quarter chicken, flame-grilled to perfection and packed with spice—just the right amount of heat!"
    },
    {
      name: "Veggie Skewers",
      image: image5,
      price: "$4",
      description: "Grilled veggie skewers, perfectly seasoned with peri-peri spice—an amazing choice for vegans and vegetarians!"
    },
    {
      name: "Chicken Sandwich",
      image: image6,
      price: "$5",
      description: "Juicy chicken, fresh ingredients, and Nando's famous peri-peri sauce—you've got the perfect sandwich, packed with bold flavor!"
    },
    {
      name: "Chicken Tender & Chips",
      image: image7,
      price: "$8",
      description: "Crispy chicken tenders and hot, crunchy chips—the perfect combo to satisfy your cravings and spice things up!"
    }
    
  ];

  const handleOrderNowClick = () => {
    setShowPopup(true);  
  };

  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  const toggleModal = (itemName) => {
    setCurrentItem(itemName);
    setShowSuccessMessage(true);  
  };

  return (
    <div className="location_container">
      <img src={image1} alt="logo" className='location_image' />
      <div className="cards">
        <div className="card1">
          <div className="description">
            <div className="content">
              <h5>Nando's</h5>
            </div>
            <div className="text">
              <p>Flame grilled delights</p>
            </div>

            <button className="btn" onClick={handleOrderNowClick}>Order Now</button>
          </div>
        </div>
        <div className="card2">
          <div className="description">
            <div className="content"><h5>Food delivery</h5></div> 
            <div className="text">
              <p>Bold Peri-Peri, delivered to your doorstep</p>
            </div>
            <button className="btn" onClick={handleOrderNowClick}>Order Now</button> {/* Consistent button */}
          </div>
        </div>
        <div className="card3">
          <div className="description">
            <h5>Visit Us</h5>
            <p>Find a Nando's near you</p>
          </div>
          <button className="btn" onClick={handleFindStoreClick}>Find store</button>
        </div>
      </div>

      {/* Order Popup */}
      {showPopup && !showSuccessMessage && (
        <div className="order-popup">
          <div className="popup-content">
            <h3>Place Your Order</h3>
            <p>Choose the items you want to order.</p>
            <div className="order-list">
            <ul>
              {items.map((item, index) => (
                <li key={index} className="order-item">
                  <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                  <div>
                    <span>{item.name} - {item.price}</span>
                    <p>{item.description}</p>
                    <button className="btn" onClick={() => toggleModal(item.name)}>Order</button>
                  </div>
                </li>
              ))}
            </ul>
            </div>
            <button className="close-btn" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="order-popup">
          <div className="popup-content">
            <h3>Thank You for Ordering!</h3>
            <p>Your order for {currentItem} has been placed successfully.</p>
            <button className="close-btn" onClick={() => setShowSuccessMessage(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
