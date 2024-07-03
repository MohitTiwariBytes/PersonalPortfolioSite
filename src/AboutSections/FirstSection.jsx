import React, { useEffect, useRef } from "react";
import "./FirstSection.css";
import { gsap, ScrollTrigger } from "gsap/all";
import myImg from "../assets/IMG_0565.jpeg";

gsap.registerPlugin(ScrollTrigger);

const FirstSection = () => {
  const titleRef = useRef(null);
  const titleRef1 = useRef(null);
  const lineRef = useRef(null);
  const iconRef = useRef(null);
  let x = 0;

  useEffect(() => {
    gsap.to(iconRef.current, {
      rotation: 880,
      scrollTrigger: {
        trigger: iconRef.current,
        start: "top bottom", // Animation starts when the top of the element hits the bottom of the viewport
        end: "bottom top", // Animation ends when the bottom of the element hits the top of the viewport
        scrub: 2, // Synchronizes the animation with the scroll position and adds a delay for smoother animation
      },
    });

    gsap.fromTo(
      lineRef.current,
      {
        width: "-150%",
      },
      { width: "69%", duration: 1.1, ease: "power4.out", stagger: 0.1 }
    );
    gsap.fromTo(
      titleRef.current,
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
      titleRef1.current,
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
    <div className="about-first-section-main">
      <div className="about-first-section">
        <div className="topFirst">
          <div className="title">
            <h1>
              <div ref={titleRef} className="firstLine">
                <span>I am just a 13 year old teenager</span>
              </div>
            </h1>
            <h1>
              <div ref={titleRef1} className="secondLine">
                <span>interested in coding</span>

                <i ref={iconRef} class="fa-solid fa-arrow-down-long fa-1x"></i>
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
