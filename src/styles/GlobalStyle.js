import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Import Google Fonts
const GlobalStyle = createGlobalStyle`
 
`;


const Testimonials = () => {
  return (
    <>
    
    </>
  );
};

// Styled-components
const Section = styled.section`
  padding: 50px 60px;
  background-color: #f5f5f5;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const TestimonialContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 20%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Poppins', sans-serif;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  p {
    font-weight: 400;
  }

  span {
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    width: 22%;
  }

  @media (max-width: 992px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Testimonials;
