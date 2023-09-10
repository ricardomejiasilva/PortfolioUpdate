import React from "react";
import "./MyWorks.css";
import MobileApps from "./MobileApps";
import Web from "./Web";
import Emails from "./Emails";

const MyWorks = ({projectSection}) => {

  return (
    <div id="project" ref={projectSection} className="myWorksContainer pad">
      <div className="container">
        <h3>My Works</h3>
        <MobileApps />
        <Web />
        <Emails />
      </div>
    </div>
  );
};

export default MyWorks;
