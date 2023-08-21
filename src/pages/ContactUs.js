import React, { useState } from "react";
import "../styles/ContactUs.css";
import Image1 from "../images/image01.jpg";
import Image3 from "../images/image03.jpg";
import { PhoneFill,EnvelopeOpen,Whatsapp,Facebook,Instagram,Twitter } from "react-bootstrap-icons";
// import {
//   FaPhoneSquare,
//   FaEnvelope,
//   FaWhatsapp,
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
// } from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your code here to handle form submission
    setSubmitted(true);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-image-container">
        <img className="contact-image-1" src={Image1} alt="Contact Us" />
        <h2 className="contact-image-text">Contact Us</h2>
      </div>
      <div className="contact-details-container">
        <div className="contact-image-container">
          <img className="contact-image-2" src={Image3} alt="Get in Touch" />
          <h2 className="contact-image-text-2">Get in Touch</h2>
        </div>
        <div className="text-container">
          <h2>
            Reach and Contact Us!
            <br />
            <br />
          </h2>
          <h3>
            Please feel free <br />
            to get in touch <br />
            using this contact form.
          </h3>
        </div>
        <div className="contact-form-container">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <h2>Hello! Contact with Us!</h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="submitted-message">
              <p>Thank you for reaching out to us!</p>
              <p>We will get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
      <div className="contact-info-container">
        <div className="contact-info-box">
          <div className="contact-info-icon">
            <PhoneFill className="contact-icon" />
          </div>
          <div>
            <p>Phone: 0712402274</p>
          </div>
        </div>
        <div className="contact-info-box">
          <div className="contact-info-icon">
            <EnvelopeOpen className="contact-icon" />
          </div>
          <div>
            <p>Email: guideme@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="social-info-box">
        <div className="social-icon">
          <Whatsapp className="contact-icon" />
          <Facebook className="contact-icon" />
          <Instagram className="contact-icon" />
          <Twitter className="contact-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
