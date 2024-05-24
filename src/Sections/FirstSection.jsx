import React from "react";
import {motion} from "framer-motion"
import "./FirstSection.css"
import WavingHand from "../assets/512.gif"
import MyImage from "../assets/MyNewImage.jpg"
import downArrow from "../assets/downarrow.png"


const FirstSection = () =>{
    return(
        <div className="first-section-main">
            <div className="first-section-image">
                <img src={MyImage} alt="" />
            </div>
            <div className="first-section-text">
                <h1>Hi, <img src={WavingHand} alt="" />  I am <z>Mohit Tiwari!</z> A 13 year old front-end developer from India.</h1>
            </div>

            <div className="downArrow">
                <img src={downArrow} alt="" />
            </div>

        </div>
    )
}

export default FirstSection