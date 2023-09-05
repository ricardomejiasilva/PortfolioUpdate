import React from "react";
import DeveloperInfo from "./DeveloperInfo";
import SkillsInfo from "./SkillsInfo";
import DeveloperSection from "../DeveloperSection/DeveloperSection";

const Profile = () => {
  return (
    <div className="developerContainer" style={{ marginTop: "130px" }}>
      <div className="container ">
        {/* <DeveloperInfo /> */}
        <DeveloperSection />
        <SkillsInfo />
      </div>
    </div>
  );
};

export default Profile;
