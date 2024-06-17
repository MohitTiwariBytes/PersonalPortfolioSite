import React from "react";
import "./SecondSection.css";
import Marquee from "../Components/Marquee.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SecondSection = () => {
  return (
    <div className="second-section-main">
      <h1 id="aboutMeTitle">Who Am I?</h1>
      <div className="about-parent">
        <div className="who-am-i-card-1 rdsharma">
          <h1>Who am I?</h1>
          <span>
            Hello! My name is Mohit Tiwari. I'm an enthusiastic and self-taught
            frontend developer. Currently, I'm a student at Shri Krishna Inter
            College in Noida, where I'm constantly exploring new opportunities
            to learn and grow. My journey in the tech world started with a
            simple curiosity about how websites work, which has now evolved into
            a passionate pursuit of creating engaging and functional web
            applications. When I'm not coding, you can find me participating in
            various activities and projects that enhance my skills and
            knowledge.
          </span>
        </div>
        <div className="who-am-i-card-2 rdsharma">
          <h1>Community Involvement</h1>
          <span>
            I'm proud to be a part of HackClub, an amazing community of
            like-minded individuals who are as passionate about technology and
            coding as I am. Being a member of HackClub has provided me with
            incredible opportunities to collaborate, learn, and share knowledge
            with others. It's a place where I've found support, inspiration, and
            the drive to push my boundaries further. knowledge. HackClub has not
            only helped me improve my technical skills but has also allowed me
            to develop a network of friends and mentors who constantly encourage
            me to strive for excellence.
          </span>
        </div>
        <div className="who-am-i-card-3 rdsharma">
          <h1>Current Projects and Future Goals</h1>
          <span>
            At the moment, I'm working on an exciting project called
            Teencodehub. This platform aims to create a space where teenagers
            can come together to share resources, learn new skills, and support
            each other in their coding journeys. My goal with Teencodehub is to
            make learning tech more accessible and engaging for young people,
            helping them to discover their potential and passion for technology.
            Looking ahead, I aspire to deepen my knowledge in frontend
            development and explore other areas such as backend development and
            AI. I am committed to continuous learning and hope to contribute to
            innovative projects that make a positive impact on the world.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
