import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./FirstSection.css";

const FirstSection = () => {
  useEffect(() => {
    // Initialize SplitType
    // GSAP animation
    gsap.fromTo(
      ".text-main h1",
      {
        y: "1700px",
      },
      {
        y: "0px",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      ".frontend p",
      {
        y: "1700px",
      },
      {
        y: "0px",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      ".location p",
      {
        y: "1700px",
      },
      {
        y: "0px",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="first-section-main">
      <div className="first-section">
        <div className="front-text">
          <div className="text-main">
            <h1>MohitTiwariDev</h1>
          </div>
        </div>

        <div className="bottom">
          <div className="frontend">
            <p>13 yo front-end dev</p>
          </div>
          <div className="location">
            <p>India, Uttar-Pradesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
