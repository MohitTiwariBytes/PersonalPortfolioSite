import React from "react";
import "./SecondSection.css";
import gsap from "gsap";
import myImage from "../assets/MyNewImage.jpg";
import AnimatedButton from "../Components/AnimatedButton";

const SecondSection = () => {
  return (
    <div className="second-section-main">
      <div className="main-second-section">
        <div className="first">
          <div className="imageAndButton">
            <h1>
              Just a <z>13 year old teenager</z> who is learning how to talk
              with a computer, with a solid interest in frontend development!
            </h1>

            <div className="button">
              <AnimatedButton
                text={"About Me"}
                onClick={function () {
                  window.location.href = "/about";
                }}
              />
            </div>
          </div>

          <img src={myImage} alt="Mohit Tiwari" className="firstImg" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
