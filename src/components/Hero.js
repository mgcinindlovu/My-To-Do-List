import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Import assets (static background & images)
import staticBg from '../assets/chuttersnap-4JHMt29fvj8-unsplash.jpg';


// Product Data (Images, Texts, Buttons)
const productData = [
  {  title: "Explore the Latest Trends", description: "Step into style with our exclusive sneaker collection.", btnColor: "rgba(0, 38, 255, 0.7)" },
  {  title: "Revolutionize Your Footwear", description: "Find the perfect blend of comfort and fashion.", btnColor: "rgba(255, 0, 102, 0.7)" },
  { title: "Unleash Your Street Style", description: "Bold sneakers for bold individuals.", btnColor: "rgba(0, 255, 102, 0.7)" },
  {  title: "Elevate Your Sneaker Game", description: "Premium kicks designed for the modern trendsetter.", btnColor: "rgba(255, 165, 0, 0.7)" },
  {  title: "Urban Fashion Redefined", description: "Discover sneakers that make a statement.", btnColor: "rgba(75, 0, 130, 0.7)" },
  {  title: "Comfort Meets High Fashion", description: "Stay comfortable while looking effortlessly cool.", btnColor: "rgba(255, 69, 0, 0.7)" },
  { title: "The Future of Sneakers", description: "Cutting-edge designs for the fashion-forward.", btnColor: "rgba(0, 191, 255, 0.7)" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection>
      {/* Left Side - Dynamic Text Content */}
      <ContentContainer>
        <Title>{productData[currentIndex].title}</Title>
        <Description>{productData[currentIndex].description}</Description>
        <ShopButton 
          style={{ backgroundColor: productData[currentIndex].btnColor }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Shop Now
        </ShopButton>
      </ContentContainer>

  
   
    </HeroSection>
  );
};

// Styled Components
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 100px 10%;
  height: 80vh;
  color: white;
  background-image: url(${staticBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 1024px) {
    padding: 80px 5%;
    flex-direction: column;
    text-align: center;
    

  }

  @media (max-width: 768px) {
    padding: 60px 3%;
    height: 40vh;
  }

  @media (max-width: 480px) {
    padding: 40px 2%;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const popIn = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 10%;
  margin-bottom: 10px;
  animation: ${slideInLeft} 1s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  animation: ${slideInRight} 1s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ShopButton = styled.button`
  padding: 12px 24px;
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  animation: ${popIn} 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 10px 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

const ContentContainer = styled.div`
  max-width: 500px;
  animation: ${fadeIn} 1s ease-in-out;
  flex: 1;

  @media (max-width: 1024px) {
    max-width: 90%;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  animation: ${popIn} 1s ease-in-out;
  max-width: 600px;
  margin-left: auto;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 70%;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  animation: ${popIn} 1s ease-in-out;
`;

export default Hero;
