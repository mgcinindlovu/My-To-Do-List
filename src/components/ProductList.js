import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaCartPlus } from "react-icons/fa"; // For cart icon
import image1 from "../assets/men 3.jpg";
import image2 from "../assets/women 2.jpg";

import image4 from "../assets/artem-bondarchuk-XPBYi4K8vFI-unsplash-removebg-preview.png";
import image5 from "../assets/zakaria-issaad-vL-iTQna6Vc-unsplash-removebg-preview.png";
import image6 from "../assets/zakaria-issaad-3C3T4zGfqxw-unsplash-removebg-preview.png";
import image7 from "../assets/sahej-brar-SY7t8068fow-unsplash__1_-removebg-preview.png";
import image8 from "../assets/usama-akram-kP6knT7tjn4-unsplash-removebg-preview.png";
import image9 from "../assets/usama-akram-s-gYAbQToXk-unsplash__1_-removebg-preview.png";
import image10 from "../assets/omar-prestwich-jLEGurepDco-unsplash-removebg-preview.png";
import styled from "styled-components";

// Simple Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} style={{ color: i < rating ? "#ffb400" : "#ddd" }}>
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    openCart();
  };

  return (
    <Section>
      <h2>Our Products</h2>

      {/* Men's Products Section */}
      <SectionBlock>
        <TextBlock>
          <h3>Men's Collection</h3>
          <p>
            Discover the latest trends in men's fashion. From casual wear to
            formal attire, we have it all.
          </p>
         
        </TextBlock>
        <ImageBlock>
          <img src={image1} alt="Men's Fashion" />
          <div>
            <button onClick={openModal}>View Collection</button>
          </div>
        </ImageBlock>
      </SectionBlock>

      {/* Women's Products Section */}
      <SectionBlock reverse>
        <TextBlock>
          <h3>Women's Collection</h3>
          <p>
            Explore the latest styles and designs in women's fashion. From
            elegant dresses to stylish everyday wear, find your perfect look.
          </p>
        
        </TextBlock>
        <ImageBlock>
          <img src={image2} alt="Women's Fashion" />
        </ImageBlock>
        <div>
            <button onClick={openModal}>View Collection</button>
          </div>
      </SectionBlock>

      {/* Product Carousel */}
      <h3>Our Products</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Card>
            <img src={image4} alt="Product 1" />
            <h3>Product 1</h3>
            <p>$50</p>
            <StarRating rating={4} />
            <button onClick={() => addToCart("Product 1")}>
              <FaCartPlus />
            </button>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img src={image5} alt="Product 2" />
            <h3>Product 2</h3>
            <p>$100</p>
            <StarRating rating={5} />
            <button onClick={() => addToCart("Product 2")}>
              <FaCartPlus />
            </button>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img src={image6} alt="Product 3" />
            <h3>Product 3</h3>
            <p>$150</p>
            <StarRating rating={4} />
            <button onClick={() => addToCart("Product 3")}>
              <FaCartPlus />
            </button>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img src={image7} alt="Product 3" />
            <h3>Product 3</h3>
            <p>$40</p>
            <StarRating rating={4} />
            <button onClick={() => addToCart("Product 3")}>
              <FaCartPlus />
            </button>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img src={image8} alt="Product 3" />
            <h3>Product 3</h3>
            <p>$70</p>
            <StarRating rating={4} />
            <button onClick={() => addToCart("Product 3")}>
              <FaCartPlus />
            </button>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img src={image9} alt="Product 3" />
            <h3>Product 3</h3>
            <p>$75</p>
            <StarRating rating={4} />
            <button onClick={() => addToCart("Product 3")}>
              <FaCartPlus />
            </button>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img src={image10} alt="Product 3" />
            <h3>Product 3</h3>
            <p>$80</p>
            <StarRating rating={4} />
            <button onClick={() => addToCart("Product 3")}>
              <FaCartPlus />
            </button>
          </Card>
        </SwiperSlide>


  
      </Swiper>

      {/* Modal Popup */}
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <h3>Collection Details</h3>
            <p>Here you can view the full collection of products...</p>
            <button onClick={closeModal}>Close</button>
          </ModalContent>
        </Modal>
      )}

      {/* Cart Popup */}
      {isCartOpen && (
        <CartModal>
          <CartContent>
            <h3>Shopping Cart</h3>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <button onClick={closeCart}>Close Cart</button>
          </CartContent>
        </CartModal>
      )}
    </Section>
  );
};

export default ProductList;

// Styled Components
const Section = styled.section`
  padding: 50px 150px;
  background-color: #f5f5f5;
  text-align: center;

  h2 {
    color: blue;
  }

  @media (max-width: 1024px) {
    padding: 50px 20px;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const SectionBlock = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
  }

  ${(props) =>
    props.reverse &&
    `
    flex-direction: row-reverse;
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align: left;
  display: grid;

  h3 {
    color: blue;
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }

 

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }

    button {
      font-size: 16px;
    }
  }
`;

const ImageBlock = styled.div`
  flex: 1;

  img {
    width: 100;
    height:250px;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
      width: 100%; 
      height: 220px; 
    }

    @media (max-width: 768px) {
      width: 80%;  
      height: 100px; 
    }

    @media (max-width: 480px) {
      width: 100%;  
      height: 50px; 
    }
  
`;

const Card = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: pointer;

 img {
    width: 100%;
    height: 250px; /* Fixed height for consistency */
    object-fit: cover; /* Ensures images fill the space properly */
    border-radius: 10px;
    @media (max-width: 1024px) {
      width: 100%; 
      height: 220px; 
    }

    @media (max-width: 768px) {
      width: 80%;  
      height: 100px; 
    }

    @media (max-width: 480px) {
      width: 100%;  
      height: 50px; 
    }
  }

  h3 {
    font-size: 20px;
    margin: 15px 0 10px;
  }

  p {
    font-size: 16px;
    color: blue;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 20px;
    background-color: blue;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 40%;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #fff;
      color: blue;
    }
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

// Modal styles
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  width: 400px;

  h3 {
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: blue;
    }
  }
`;

// Cart Modal styles
const CartModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CartContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  width: 400px;

  h3 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
  }

  button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: blue;
    }
  }
`;

