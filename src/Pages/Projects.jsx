import React from "react";
import "./Projects.css";
import gsap from "gsap";
import FirstSection from "../ProjectsSections/FirstSection";
import Navbar from "../Components/Navbar";
import SmoothScroll from "../Components/SmoothScroll";

const Projects = () => {
  return (
    <div className="main-projects">
      <Navbar></Navbar>
      <FirstSection></FirstSection>
    </div>
  );
};

export default Projects;
