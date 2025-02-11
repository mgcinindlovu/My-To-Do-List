import React, { useState } from 'react';
import image1 from '../assets/unnamed (3).jpg';
import image2 from '../assets/pexels-nano-erdozain-120534369-19345991 1.jpg';
import image3 from '../assets/pexels-g-n-403098-13897888 1.jpg';
import image4 from '../assets/pexels-unkdevil-19331027 1.jpg';
import image5 from '../assets/🍗 Bang Bang Chicken Sandwich 🌶️ 1.jpg';
import image6 from '../assets/pexels-nano-erdozain-120534369-19345991 1.jpg';
import { FaArrowRight } from "react-icons/fa";
import '../components/AboutUs.css';

const AboutUs = () => {
  // State for modal visibility
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  // Function to toggle modal visibility and set the current item
  const toggleModal = (itemName) => {
    setCurrentItem(itemName);
    setShowModal(!showModal);
  };

  return (
    <div className='AboutUs'>
        <div className='heading'>
          <h2>Our Food Menu</h2>
        </div> 

        <div className='card-cards'>
          <div className='cards'>
            <div className='card'>
              <img src={image1} alt='card-imge' />
              <div className='price'>
                <div><h3>Fire Grilled Drumsticks</h3></div>
                <div className='price_tag'>
                  <h3>Price</h3>
                  <p>$11</p>
                </div>
              </div>
              <div className='description'>
                <p>Enjoy mouthwatering drumsticks, perfectly seasoned and cooked to golden perfection. Tender, juicy, and full of flavor.</p>
                <button className='btn' onClick={() => toggleModal("Fire Grilled Drumsticks")}>Order</button>
              </div>
            </div>

            <div className='card'>
              <img src={image2} alt='card-imge' />
              <div className='price'>
                <div><h3>Onion Burger</h3></div>
                <div className='price_tag'>
                  <h3>Price</h3>
                  <p>$5</p>
                </div>
              </div>
              <div className='description'>
                <p>Enjoy mouthwatering caramelized onions and a perfectly grilled patty. This burger is an authentic Nando's experience in every bite!</p>
                <button className='btn' onClick={() => toggleModal("Onion Burger")}>Order</button>
              </div>
            </div>

            <div className='card'>
              <img src={image3} alt='card-imge' />
              <div className='price'>
                <div><h3>1/4 Chicken</h3></div>
                <div className='price_tag'>
                  <h3>Price</h3>
                  <p>$11</p>
                </div>
              </div>
              <div className='description'>
                <p>A quarter chicken, flame-grilled to perfection and packed with spice—just the right amount of heat!</p>
                <button className='btn' onClick={() => toggleModal("1/4 Chicken")}>Order</button>
              </div>
            </div>
          </div>

          <div className='cards'>
            <div className='card'>
              <img src={image4} alt='card-imge' />
              <div className='price'>
                <div><h3>Veggie Skewers</h3></div>
                <div className='price_tag'>
                  <h3>Price</h3>
                  <p>$4</p>
                </div>
              </div>
              <div className='description'>
                <p>Grilled veggie skewers, perfectly seasoned with peri-peri spice—an amazing choice for vegans and vegetarians!</p>
                <button className='btn' onClick={() => toggleModal("Veggie Skewers")}>Order</button>
              </div>
            </div>

            <div className='card'>
              <img src={image5} alt='card-imge' />
              <div className='price'>
                <div><h3>Chicken Sandwich</h3></div>
                <div className='price_tag'>
                  <h3>Price</h3>
                  <p>$5</p>
                </div>
              </div>
              <div className='description'>
                <p>Juicy chicken, fresh ingredients, and Nando's famous peri-peri sauce—you've got the perfect sandwich, packed with bold flavor!</p>
                <button className='btn' onClick={() => toggleModal("Chicken Sandwich")}>Order</button>
              </div>
            </div>

            <div className='card'>
              <img src={image6} alt='card-imge' />
              <div className='price'>
                <div><h3>Chicken Tender & Chips</h3></div>
                <div className='price_tag'>
                  <h3>Price</h3>
                  <p>$8</p>
                </div>
              </div>
              <div className='description'>
                <p>Crispy chicken tenders and hot, crunchy chips—the perfect combo to satisfy your cravings and spice things up!</p>
                <button className='btn' onClick={() => toggleModal("Chicken Tender & Chips")}>Order</button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Popup */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Thank you for choosing {currentItem}!</h3>
              <p>Your order has been placed successfully.</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}

        <div className='Heading'>
          <h2>View All Listings</h2>
          <FaArrowRight size={30} color="black" className='icon' />
        </div>
    </div>
  );
};

export default AboutUs;
