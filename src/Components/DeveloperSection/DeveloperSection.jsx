import React from "react";
import VideoBanner from "./VideoBanner";
import FeaturedOn from "./FeaturedOn";
import WorkExperiences from "./WorkExperiences";
import "./DeveloperSection.css";

const DeveloperSection = () => {
  return (
    <div>
      <VideoBanner />
      <FeaturedOn />
      <WorkExperiences />
    </div>
  );
};

export default DeveloperSection;
