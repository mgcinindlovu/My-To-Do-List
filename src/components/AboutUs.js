import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import image1 from "../assets/close-up-futuristic-sneakers.jpg";
import image2 from "../assets/pexels-perfect-lens-12879626.jpg";
import image3 from "../assets/omar-prestwich-jLEGurepDco-unsplash.jpg";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutSection>
      {/* Left Side - Text */}
      <AboutText>
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Mgee Sneaker Culture</strong>, your go-to
          destination for premium sneakers. We specialize in offering
          high-quality, stylish, and exclusive sneakers for sneakerheads and
          casual wearers alike. Our mission is to bring you the best sneaker
          collections that define culture and style.
        </p>
      </AboutText>

      {/* Right Side - 3 Card Slider */}
      <AboutSlider>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <Card>
              <img src={image1} alt="Exclusive Sneakers" className="card-image" />
            </Card>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <Card>
              <img src={image2} alt="Authenticity Guaranteed" className="card-image" />
            </Card>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <Card>
              <img src={image3} alt="Style & Culture" className="card-image" />
             
            </Card>
          </SwiperSlide>
        </Swiper>
      </AboutSlider>
    </AboutSection>
  );
};

export default AboutUs;

// Styled Components

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10%;
  background-color: #fff;
  height: 100vh;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding: 30px 5%;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    text-align: center;
    height: 100vh;
  }
`;

const AboutText = styled.div`
  flex: 1;
  padding-right: 100px;

  h2 {
    font-size: 42px;
    margin-bottom: 20px;
    color: blue;
  }

  p {
    font-size: 18px;
 
    color: #555;
    margin-left: 50px;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
      margin-left: 80px;
    }

    p {
      font-size: 10px;
      text-align:center;
      margin-left: 80px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const AboutSlider = styled.div`
  flex: 1;
  max-width: 700px;

  .swiper-container {
    width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 90%;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const Card = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;

  .card-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .card-title {
    font-size: 20px;
    margin: 15px 0 10px;
  }

  .card-text {
    font-size: 16px;
    color: #666;
  }

  @media (max-width: 1024px) {
    .card-title {
      font-size: 18px;
    }

    .card-text {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .card-title {
      font-size: 16px;
     
    }

    .card-text {
      font-size: 12px;
     
    }
  }

  @media (max-width: 480px) {
    .card-title {
      font-size: 14px;
    }

    .card-text {
      font-size: 10px;
    }
  }
`;
