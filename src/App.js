import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import LatestArrivals from './components/LatestArrivals';

import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css'






function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <LatestArrivals />
      <ProductList />
      <Testimonials />
      <Footer />
     
    </>
  );
}

export default App;
