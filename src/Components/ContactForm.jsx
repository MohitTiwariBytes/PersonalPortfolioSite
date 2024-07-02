import React, { useState } from "react";
import "./ContactForm.css"

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
                <h1 style={{color: 'white', textDecoration: "none", fontSize: '50px', marginTop: "80px"}}>Connect with me!</h1>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;
