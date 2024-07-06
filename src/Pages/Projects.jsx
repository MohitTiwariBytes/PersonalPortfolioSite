import React from "react";
import "./Projects.css";
import gsap from "gsap";
import FirstSection from "../ProjectsSections/FirstSection";
import Navbar from "../Components/Navbar";
import SmoothScroll from "../Components/SmoothScroll";
import SecondSection from "../ProjectsSections/SecondSection";
import Footer from "../Components/Footer";

const Projects = () => {
  return (
    <div className="main-projects">
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
