import React from "react";
import "./home.css";
import Navbar from "../Components/Navbar";
import FirstSection from "../HomeSections/FirstSection";
import SecondSection from "../HomeSections/SecondSection";
import ThirdSection from "../HomeSections/ThirdSection";
import FourthSection from "../HomeSections/FourthSection";

const HomePage = () => {
  return (
    <div className="home-page-main">
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
    </div>
  );
};

export default HomePage;
