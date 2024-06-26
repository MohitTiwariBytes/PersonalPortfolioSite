import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "./AnimatedButton.css";

const AnimatedButton = ({ onClick, text, width }) => {
  function handleMouseEnter() {
    const icon = document.getElementById("iconarrow");
    icon.style.transform = "rotate(0deg)";
  }
  function handleMouseLeave() {
    const icon = document.getElementById("iconarrow");
    icon.style.transform = "rotate(-50deg)";
  }
  return (
    <div className="animated-button-container">
      <h1
        style={{ width: width }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className="animated-button"
      >
        {text}
        <i id="iconarrow" class="fa-solid fa-arrow-right"></i>
      </h1>
    </div>
  );
};

export default AnimatedButton;
