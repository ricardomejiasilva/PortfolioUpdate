import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer container pad">
      <h3>
        PortFolio<span className="dot">.</span>
      </h3>
      <div className="navLinkContainer">
        <Link to="/">Home</Link>
        <Link to="/#about">Skill</Link>
        <Link to="/#project">Projects</Link>
        <a href="mailto: ricardo_mejia19966@live.com">Contact</a>
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
