import React, { forwardRef } from "react";
import SkillsInfo from "./SkillsInfo";
import FeaturedOn from "./FeaturedOn";
import WorkExperiences from "./WorkExperiences";
import "./DeveloperSection.css";

const Profile = ({ aboutSection }) => {
  return (
    <div
      id="about"
      ref={aboutSection}
      className="developerContainer pad"
      style={{ marginTop: "130px" }}
    >
      <div className="container ">
        <FeaturedOn />
        <WorkExperiences />
        <SkillsInfo />
      </div>
    </div>
  );
};

export default forwardRef(Profile);
