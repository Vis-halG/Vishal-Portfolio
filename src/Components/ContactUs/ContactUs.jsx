import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <div className="contact-title">
        <h1 className="title">Let's get started.</h1>
        <p className="subtitle">BASIC CONTACT FORM</p>
        </div>
        <form className="form">
          <p className="form-text">
            My name is
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="JOHN SMITH"
              className="input-field"
            />
            and I have a
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="WEBSITE, FULL-TIME JOB, ETC."
              className="input-field"
            />
            that needs help.
          </p>
          <p className="form-text">
            You can reach me at
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="input-field"
            />
            to get things started.
          </p>
          <button type="submit" className="submit-button">
            — SEND INFO
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
