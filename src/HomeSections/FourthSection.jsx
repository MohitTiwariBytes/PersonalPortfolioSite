import React from 'react';
import "./FourthSection.css"
import award1Img from "../assets/award1Edvolution.jpg"

const FourthSection = () => {
    return (
        <div className='fourth-section-main'>
            <div className="fourth-section">
                <div className="topText">
                    <h1>Awards.</h1>
                </div>
                <div className="award1">
                    <div className="awardImg">
                        <img src={award1Img} alt="" />
                    </div>
                    <div className="aboutAward">
                        <h1>Edvolution</h1>
                        <h2>1st place</h2>
                        <h2>Awarded with Galaxy Tab A9</h2>
                        <div className="awardDescription">
                            <p>This program focuses on providing educational resources and training to underserved communities, promoting digital literacy, and supporting innovative learning methods. The collaboration seeks to bridge the educational gap and empower students with the necessary skills for future opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;
