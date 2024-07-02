// src/pages/Home.jsx
import React from 'react';
import './home.css';
import Navbar from '../Components/Navbar';
import FirstSection from '../HomeSections/FirstSection';
import SecondSection from '../HomeSections/SecondSection';
import ThirdSection from '../HomeSections/ThirdSection';
import FourthSection from '../HomeSections/FourthSection';
import Footer from '../Components/Footer';
import SmoothScroll from '../Components/SmoothScroll';

const HomePage = () => {
  return (
    
    <div className="home-page-main">
    <Navbar></Navbar>
    <SmoothScroll>
        <FirstSection id="first-section" />
        <SecondSection id="second-section" />
        <ThirdSection id="third-section" />
        <FourthSection id="fourth-section" />
        <Footer id="footer" />
    </SmoothScroll>
    </div>
  );
};

export default HomePage;
