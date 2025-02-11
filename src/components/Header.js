import React, { useState } from 'react';
import image from '../assets/unnamed (2).jpg';
import image1 from '../assets/unnamed (3).jpg';
import image2 from '../assets/pexels-nano-erdozain-120534369-19345991 1.jpg';
import image3 from '../assets/pexels-g-n-403098-13897888 1.jpg';
import image4 from '../assets/pexels-unkdevil-19331027 1.jpg';
import image5 from '../assets/🍗 Bang Bang Chicken Sandwich 🌶️ 1.jpg';
import image6 from '../assets/pexels-nano-erdozain-120534369-19345991 1.jpg';
import '../components/Header.css';

const Header = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentItem, setCurrentItem] = useState('');

  const items = [
    {
      name: "Fire Grilled Drumsticks",
      image: image1,
      price: "$11",
      description: "Enjoy mouthwatering drumsticks, perfectly seasoned and cooked to golden perfection. Tender, juicy, and full of flavor."
    },
    {
      name: "Onion Burger",
      image: image2,
      price: "$5",
      description: "Enjoy mouthwatering caramelized onions and a perfectly grilled patty. This burger is an authentic Nando's experience in every bite!"
    },
    {
      name: "1/4 Chicken",
      image: image3,
      price: "$11",
      description: "A quarter chicken, flame-grilled to perfection and packed with spice—just the right amount of heat!"
    },
    {
      name: "Veggie Skewers",
      image: image4,
      price: "$4",
      description: "Grilled veggie skewers, perfectly seasoned with peri-peri spice—an amazing choice for vegans and vegetarians!"
    },
    {
      name: "Chicken Sandwich",
      image: image5,
      price: "$5",
      description: "Juicy chicken, fresh ingredients, and Nando's famous peri-peri sauce—you've got the perfect sandwich, packed with bold flavor!"
    },
    {
      name: "Chicken Tender & Chips",
      image: image6,
      price: "$8",
      description: "Crispy chicken tenders and hot, crunchy chips—the perfect combo to satisfy your cravings and spice things up!"
    }
  ];

  const handleFindStoreClick = () => {
    window.open('https://www.google.com/maps/search/nandos+google+maps/@-17.8245188,31.056647,15z?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const handleOrderClick = () => {
    setShowOrderPopup(true);  
  };

  const handleClosePopup = () => {
    setShowOrderPopup(false); 
  };

  const toggleModal = (itemName) => {
    setCurrentItem(itemName);
    setShowSuccessMessage(true);  // Display success message
  };

  return (
    <div className='header_container'>
      <div className='logo'>
        <img src={image} alt='logo' />
      </div>
      <div className='nav-list'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Locations</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>News</a></li>
        </ul>
      </div>
      <div className='buttons'>
        <button className='btn1' onClick={handleOrderClick}>Order Now</button>
        <button className='btn2' onClick={handleFindStoreClick}>
          Find A Store
        </button>
      </div>

      {/* Order Popup */}
      {showOrderPopup && !showSuccessMessage && (
        <div className="order-popup">
          <div className="popup-content">
            <h3>Place Your Order</h3>
            <p>Choose the items you want to order.</p>
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

export default Header;
