import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer container">
      <h3>
        PortFolio<span className="dot">.</span>
      </h3>
      <div className="navLinkContainer">
        <a href="#">Home</a>
        <a href="#">Skill</a>
        <a href="#">Project</a>
        <a href="#">Contact</a>
      </div>
      <hr className="footerLine" />
      <div className="copyRightsContainer">
        <p>© Copyrights 2023. All Reserved</p>
        <div className="policyContainer">
          <p>Privacy Policy</p>
          <p className="footerDot"></p>
          <p>Terms and Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
