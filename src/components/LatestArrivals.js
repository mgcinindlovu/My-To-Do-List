import React, { useState } from 'react';
import Image from '../assets/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg';
import styled from 'styled-components';

const LatestArrivals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample Items to display in the modal
  const items = [
    { id: 1, name: 'Product 1', price: '$50' },
    { id: 2, name: 'Product 2', price: '$60' },
    { id: 3, name: 'Product 3', price: '$70' },
  ];

  const handleOrderClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <OrderSection>
        <h2>Get Your Favorite Products Now!</h2>
        <p>Browse our exclusive collection and order now. Limited stock available!</p>
        <OrderButton onClick={handleOrderClick}>Order Now</OrderButton>
      </OrderSection>

      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Order Summary</h3>
            {items.map((item) => (
              <Item key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </Item>
            ))}
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default LatestArrivals;

// Styled Components

const OrderSection = styled.section`
  padding: 100px 20px;
  background-image: url(${Image});
  background-size: cover;
  background-position: center center;
  text-align: left;
  color: #fff;
  height: 40vh;

  @media (max-width: 1024px) {
    padding: 80px 15px;
    height: 70vh;
  }

  @media (max-width: 768px) {
    padding: 60px 10px;
    height: 30vh;
  }

  @media (max-width: 480px) {
    padding: 40px 5px;
    height: 50vh;
  }
`;

const OrderButton = styled.button`
  padding: 15px 30px;
  font-size: 1.1rem;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
  }

  @media (max-width: 1024px) {
    padding: 12px 25px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 0.8rem;
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  width: 300px;
  text-align: center;
  border-radius: 8px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;
