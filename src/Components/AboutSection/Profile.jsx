import React, { forwardRef } from "react";
import SkillsInfo from "./SkillsInfo";
import VideoBanner from "./VideoBanner";
import FeaturedOn from "./FeaturedOn";
import WorkExperiences from "./WorkExperiences";

const Profile = ({ aboutSection }) => {
  return (
    <div
      id="about"
      ref={aboutSection}
      className="developerContainer pad"
      style={{ marginTop: "130px" }}
    >
      <div className="container ">
        <VideoBanner />
        <FeaturedOn />
        <WorkExperiences />
        <SkillsInfo />
      </div>
    </div>
  );
};

export default forwardRef(Profile);
