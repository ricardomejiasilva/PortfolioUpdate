import React from "react";
import "./Breadcrums.css";
import arrows from "../../assets/dobleRightArrow.png";
import { Link } from "react-router-dom";

const Breadcrums = () => {
  return (
    <div className="breadcrumsContainer">
      <p>
        <Link to="/#project">Home</Link>
      </p>
      <img src={arrows} alt="" />
      <p className="activeCrums">Project</p>
    </div>
  );
};

export default Breadcrums;
