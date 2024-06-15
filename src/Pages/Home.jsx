import React from "react";
import "./home.css"
import Navbar from "../Components/Navbar"
import FirstSection from "../HomeSections/FirstSection"
import SecondSection from "../HomeSections/SecondSection";

const HomePage = () => {
    
    return (
        <div className="home-page-main">
            <Navbar></Navbar>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
        </div>
    )
}

export default HomePage