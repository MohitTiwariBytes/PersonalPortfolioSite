import React, { useState, useRef, useEffect, forwardRef } from "react";
import "./Footer.css";
import gsap from "gsap";

const Footer = forwardRef((props, ref) => {
  const hamRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = hamRef.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left - rect.width / 2;
      const mouseY = event.clientY - rect.top - rect.height / 2;

      gsap.to(hamRef.current, {
        x: mouseX * 0.3,
        y: mouseY * 0.3,
        scale: 1.1,
        ease: "power3.out",
        duration: 0.5,
      });
      gsap.to(textRef.current, {
        x: mouseX * 0.3,
        y: mouseY * 0.3,
        scale: 1.1,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(hamRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.5,
      });
      gsap.to(textRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    const hamElement = hamRef.current;
    const textElement = textRef.current;
    hamElement.addEventListener("mousemove", handleMouseMove);
    hamElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hamElement.removeEventListener("mousemove", handleMouseMove);
      hamElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="main-footer" ref={ref}>
      <div className="footer">
        <div className="left">
          <h1>Wanna work with me?</h1>
          <div className="line"></div>
          <div className="info">
            <span id="number">+91 7703931038</span>
            <span id="email">mohittiwaridev@gmail.com</span>
          </div>
        </div>
        <div ref={hamRef} className="button1">
          <span ref={textRef}>Get in touch!</span>
        </div>
      </div>
    </div>
  );
});

export default Footer;
