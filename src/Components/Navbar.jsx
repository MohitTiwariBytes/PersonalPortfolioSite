import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);

  const handleHamClick = () => {
    setHamOpen(!hamOpen);
  };
  return (
    <div className="main-navbar">
      <div
        style={{
          background: hamOpen ? "none" : "rgba( 255, 255, 255, 0.2 )",
          backdropFilter: hamOpen ? "none" : "blur(10px)",
          boxShadow: hamOpen ? "none" : "0 0 10px rgba(0, 0, 0, 0.2)",
          border: hamOpen ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
        }}
        className="nav-parent"
      >
        <div className="nav">
          <div
            style={{ display: hamOpen ? "none" : "block" }}
            className="header"
          >
            <h1>MohitTiwariDev</h1>
          </div>
          <div className="ham-parent">
            <motion.div className="ham" onClick={handleHamClick}>
              <motion.div
                animate={{ rotate: hamOpen ? 47 : 0 }}
                className="line1"
              ></motion.div>
              <motion.div
                animate={{
                  marginTop: hamOpen ? -5 : 0,
                  rotate: hamOpen ? -47 : 0,
                }}
                className="line2"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
        animate={{
          display: hamOpen ? "flex" : "none",
          marginTop: hamOpen ? 0 : -4700,
        }}
        className="ham-items-parent"
      >
        <div onClick={handleHamClick} className="text">
          <h1>Mohit Tiwari Dev.</h1>
        </div>

        <div className="divider"></div>
        <motion.div className="ham-items">
          <motion.a whileHover={{ marginLeft: 22 }} href="/">
            Home
          </motion.a>
          <motion.a whileHover={{ marginLeft: 22 }} href="/about">
            About
          </motion.a>
          <motion.a whileHover={{ marginLeft: 22 }} href="/projects">
            Projects
          </motion.a>
          <motion.a whileHover={{ marginLeft: 22 }} href="/contact">
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
