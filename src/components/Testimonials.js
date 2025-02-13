import React from 'react';
import styled from 'styled-components';

// Sample images for customer testimonials
import customer1Image from '../assets/batel-studio-ttSRjiYG_WM-unsplash.jpg';
import customer2Image from '../assets/charles-etoroma-95UF6LXe-Lo-unsplash.jpg';
import customer3Image from '../assets/ivana-cajina-dnL6ZIpht2s-unsplash.jpg';

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <h2>What Our Customers Say</h2>

      <TestimonialContainer>
        {/* Testimonial 1 */}
        <TestimonialCard>
          <img src={customer1Image} alt="Customer 1" />
          <p>"Mgee offers unique products with exceptional quality. I absolutely love my shoes!"</p>
          <span>- Customer 1</span>
        </TestimonialCard>

        {/* Testimonial 2 */}
        <TestimonialCard>
          <img src={customer2Image} alt="Customer 2" />
          <p>"The clothes are not only stylish but also very comfortable. I am a huge fan of this brand!"</p>
          <span>- Customer 2</span>
        </TestimonialCard>

        {/* Testimonial 3 */}
        <TestimonialCard>
          <img src={customer2Image} alt="Customer 2" />
          <p>"The clothes are not only stylish but also very comfortable. I am a huge fan of this brand!"</p>
          <span>- Customer 2</span>
        </TestimonialCard>

      </TestimonialContainer>
    </Section>
  );
};

// Styled-components

const Section = styled.section`
  padding: 50px 60px;
  background-color: #f5f5f5;
  text-align: center;
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

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
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
