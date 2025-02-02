import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="experience-container">
        <div className="heading">
        <img src="src/assets/images/magic-bus-logo.gif" alt="Magic Bus Foundation" className="experience-image" />
        <h2>Magic Bus Foundation </h2>
        </div>
        <div className="experience-content">
          <div>
          <p className="training">( Front-end Development (Training) ) November 2024</p>
          <p>
            Completed an intensive offline training program in Web Designing & UX/UI, gaining
            expertise in modern web development skills and industry-relevant tools. The curriculum
            included hands-on experience with: Technical Skills: HTML, CSS, JavaScript, AngularJS, ReactJS, and Adobe Photoshop.
          </p>
          <p>
            
            Additional Tools: Advanced web designing
 tools and technologies essential for crafting
 responsive and user-friendly websites
          </p>
          <p>
            Worked with a team to create user interfaces with React, using HTML, CSS, and JavaScript.
            Tested features for browser compatibility, staying current with front-end trends to enhance
            skills and deliver optimized solutions.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
