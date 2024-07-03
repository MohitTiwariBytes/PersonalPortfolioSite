import React from "react";
import FirstSection from "../AboutSections/FirstSection";
import Navbar from "../Components/Navbar";
import SmoothScroll from "../Components/SmoothScroll";
import "../AboutSections/FirstSection.css";

const About = () => {
  return (
    <div className="main-about">
      <Navbar></Navbar>
      <FirstSection></FirstSection>
    </div>
  );
};

export default About;
