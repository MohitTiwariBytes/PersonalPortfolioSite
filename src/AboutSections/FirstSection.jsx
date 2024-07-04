import React, { useEffect, useRef } from "react";
import "./FirstSection.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import myImg from "../assets/IMG_0565.jpeg";

gsap.registerPlugin(ScrollTrigger);

const FirstSection = () => {
  const titleRef = useRef(null);
  const titleRef1 = useRef(null);
  const lineRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textPosition = textRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (textPosition < windowHeight) {
        textRef.current.style.color = "rgb(66, 103, 184)";
      }
      if (window.scrollY == 0) {
        textRef.current.style.color = "black";
      }

      const iconPosition = iconRef.current.getBoundingClientRect().top;

      if (window.scrollY == 0) {
        iconRef.current.style.transform = `rotate(120deg)`;
      } else {
        iconRef.current.style.transform = `rotate(${
          120 - window.scrollY / 3.5
        }deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { width: "-150%" },
      { width: "69%", duration: 1.1, ease: "power4.out", stagger: 0.1 }
    );

    gsap.fromTo(
      titleRef.current,
      { y: "1700px" },
      { y: "0px", duration: 1.1, ease: "power4.out", stagger: 0.1 }
    );

    gsap.fromTo(
      titleRef1.current,
      { y: "1700px" },
      { y: "0px", duration: 1.1, ease: "power4.out", stagger: 0.1 }
    );
  }, []);

  return (
    <div className="about-first-section-main">
      <div className="about-first-section">
        <div className="topFirst">
          <div className="title">
            <h1>
              <div ref={titleRef} className="firstLine">
                <span>
                  I am just a <span ref={textRef}>13 year old</span> teenager
                </span>
              </div>
            </h1>
            <h1>
              <div ref={titleRef1} className="secondLine">
                <span>interested in coding</span>
                <i
                  ref={iconRef}
                  className="fa-solid fa-arrow-down-long fa-1x"
                ></i>
              </div>
            </h1>
          </div>
          <div ref={lineRef} className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
