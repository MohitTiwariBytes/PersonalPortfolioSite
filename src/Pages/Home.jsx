// src/pages/Home.jsx
import React from 'react';
import './home.css';
import Navbar from '../Components/Navbar';
import FirstSection from '../HomeSections/FirstSection';
import SecondSection from '../HomeSections/SecondSection';
import ThirdSection from '../HomeSections/ThirdSection';
import FourthSection from '../HomeSections/FourthSection';
import ContactForm from '../Components/ContactForm';
import SmoothScroll from '../Components/SmoothScroll';

const HomePage = () => {
  return (
    <SmoothScroll>
      <div className="home-page-main">
        <Navbar />
        <FirstSection id="first-section" />
        <SecondSection id="second-section" />
        <ThirdSection id="third-section" />
        <FourthSection id="fourth-section" />
        <ContactForm id="contact-form" />
      </div>
    </SmoothScroll>
  );
};

export default HomePage;
