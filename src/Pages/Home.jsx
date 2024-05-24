import React from "react";
import "./home.css"
import Navbar from "../Components/Navbar"
import FirstSection from "../Sections/FirstSection"
import SecondSection from "../Sections/SecondSection";

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