import React from "react";
import FirstSection from "../AboutSections/FirstSection";
import Navbar from "../Components/Navbar";
import SmoothScroll from "../Components/SmoothScroll";
import "../AboutSections/FirstSection.css";
import SecondSection from "../AboutSections/SecondSection";
import Footer from "../Components/Footer.jsx";

const About = () => {
  return (
    <div className="main-about">
      <Navbar></Navbar>
      <SmoothScroll>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <Footer></Footer>
      </SmoothScroll>
    </div>
  );
};

export default About;
