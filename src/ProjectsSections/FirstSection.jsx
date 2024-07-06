import React, { useEffect, useRef } from "react";
import "./FirstSection.css";
import gsap from "gsap";

const FirstSection = () => {
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
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
      lineRef.current,
      {
        width: "-200px",
      },
      {
        width: "325px",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <div className="main-projects-first">
      <div className="projects-first">
        <div className="rxd3y2">
          <div className="uiw2xsa">
            <h1 ref={textRef}>Things i did!</h1>
            <div
              style={{ marginTop: 0, marginLeft: 0, width: "325px" }}
              className="line"
              ref={lineRef}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
