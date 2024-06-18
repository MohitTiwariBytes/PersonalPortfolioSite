import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./ThirdSection.css";
import FoodzyLogo from "../assets/foodzyLogo.png";
import teenCodeHubLogo from "../assets/teenCodeHubLogo.png";
import AnimatedButton from "../Components/AnimatedButton.jsx";

const ThirdSection = () => {
  return (
    <div className="third-section">
      <div className="third-section-main">
        <div className="topText">
          <h1>Projects.</h1>
        </div>

        <div className="project1">
          <div className="projectImg">
            <img src={FoodzyLogo} alt="Foodzy" />
          </div>

          <div className="aboutProject">
            <h1 id="ProjectTitle">Foodzy</h1>
            <p id="projectDescription">
              Don't know what to cook from the ingredients you have right now?
              Foodzy is here to help! with Foodzy you can find awesome recipes
              based on the ingredients you have in your hand right now!
            </p>
            <div className="buttons">
              <AnimatedButton
                width={"200px"}
                text={"View Project"}
              ></AnimatedButton>
              <AnimatedButton
                width={"200px"}
                text={"Github Repo"}
              ></AnimatedButton>
            </div>
          </div>
        </div>
        <div className="project2">
          <div className="projectImg">
            <img src={teenCodeHubLogo} alt="Foodzy" />
          </div>

          <div className="aboutProject">
            <h1 id="ProjectTitle">TeenCodeHub</h1>
            <p id="projectDescription">
              Created something mind blowing and want some feedback on it?
              TeenCodeHub got you! Post about your project and get feedback from
              experienced developers through comments and messages!
            </p>
            <div className="buttons">
              <AnimatedButton
                width={"200px"}
                text={"View Project"}
              ></AnimatedButton>
              <AnimatedButton
                width={"200px"}
                text={"Github Repo"}
              ></AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
