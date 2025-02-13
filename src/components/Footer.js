import React from 'react';
import styled from 'styled-components';
import image from '../assets/leon-skibitzki-NMyuo1hoCAA-unsplash.jpg'

const Footer = () => {
  return (
    <FooterContainer>
      <Overlay>
        <Newsletter>
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates and offers!</p>
          <Form>
            <Input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </Form>
        </Newsletter>

        <p>&copy; 2025 Mgee Store. All rights reserved.</p>
        <SocialLinks>
          <SocialLink href="#">Facebook</SocialLink>
          <SocialLink href="#">Instagram</SocialLink>
          <SocialLink href="#">Twitter</SocialLink>
        </SocialLinks>
      </Overlay>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
   background-image: url(${image});
  background-size: cover;
  background-position: center center;
  color: #fff;
  text-align: center;
  padding: 40px 20px;
`;

const Overlay = styled.div`
  background: rgba(10, 47, 255, 0.17);
  padding: 40px 20px;
  border-radius: 10px;
`;

const Newsletter = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: blue;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  width: 250px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color:white;
    color: blue;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color:blue;
  }
`;

export default Footer;
