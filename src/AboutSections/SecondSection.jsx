import React, { useEffect, useRef } from "react";
import "./SecondSection.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  return (
    <div className="main-about-second-section">
      <div className="about-second-section">
        <div className="rxy">
          <div className="second-title">
            <h1>
              <div className="xzy">
                <h1>Who am i?</h1>
                <span>
                  Hello! My name is Mohit Tiwari and i am from India,
                  Uttarpradesh and i am currently learning frontend development,
                  I am currently in class 7th at Shri Krishna Inter College
                </span>
                <h1>What i do?</h1>
                <span>
                  I usually do Front-end development but i also do a lil bit of
                  Backend development, I occasionally try to do freelancing but
                  i never get any clients 😅
                </span>
                <h1>What i know?</h1>
                <span>
                  Currently i know HTML, CSS, JavaScript, React, NodeJS, GSAP,
                  Framer-Motion, MongoDB, Firebase and Python but i am learning
                  more day by day!
                </span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
