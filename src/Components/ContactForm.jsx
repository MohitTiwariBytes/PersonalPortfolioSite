import React, { useState } from "react";
import "./ContactForm.css";
import Button from "../Components/AnimatedButton"

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the form data to your server or API here
    };

    return (
        <div className="main-contact-form">
            <div className="contact-form">
                <div className="topText">
                    <h1 style={{ color: 'white', textDecoration: "none", fontSize: '50px', marginTop: "80px" }}>Connect with me!</h1>
                </div>

                <div className="form">
                    <div className="inputs">
                        <div className="name">
                            <h1> <z>01.</z> What's your name?</h1>
                            <input type="text" placeholder="Jhon Doe" />
                        </div>
                        <div className="email">
                            <h1> <z>02.</z> What's your email address?</h1>
                            <input type="text" placeholder="jhon@doe.com" />
                        </div>
                        <div className="message">
                            <h1> <z>03.</z> What's your message for me?</h1>
                            <input type="text" placeholder="Hey Mohit, Can yo..." />
                        </div>
                        <div className="button">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
