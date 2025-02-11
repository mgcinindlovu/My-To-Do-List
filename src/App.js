import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Location from './components/Location'
import AboutUs from './components/AboutUs'
import Drinks from './components/Drinks'
import Promo from './components/Promo'
import FindUs from './components/FindUs'
import Footer from './components/Footer'
import './App.css'


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Location/>
      <AboutUs/>
      <Drinks/>
      <Promo/>
      <FindUs/>
      <Footer/>

    </div>
  )
}

export default App
