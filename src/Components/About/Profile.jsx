import React, { forwardRef } from "react";
import SkillsInfo from "./SkillsInfo";
import DeveloperSection from "../AboutSection/DeveloperSection";

const Profile = ({ aboutSection }) => {
  return (
    <div
      id="about"
      ref={aboutSection}
      className="developerContainer pad"
      style={{ marginTop: "130px" }}
    >
      <div className="container ">
        <DeveloperSection />
        <SkillsInfo />
      </div>
    </div>
  );
};

export default forwardRef(Profile);
