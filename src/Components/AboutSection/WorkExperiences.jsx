import React from "react";

const WorkExperiences = () => {
  return (
    <div className="workExperienceContainer">
      <h5>Work Experience</h5>
      <div className="row g-4">
        <div className=" col-12 col-lg-4 ">
          <div className="workExpContainer">
            <h6>September 2021 - present</h6>
            <h5>WebstaurantStore</h5>
            <p>Front-end/Mobile Developer</p>
          </div>
        </div>
        <div className=" col-12 col-lg-4 ">
          <div className="workExpContainer">
            <h6>June 2022 - April 2022</h6>
            <h5>
              Zulily <span>(Contract)</span>
            </h5>
            <p>Email Developer</p>
          </div>
        </div>
        <div className=" col-12 col-lg-4 ">
          <div className="workExpContainer">
            <h6>April 2017 - October 2021</h6>
            <h5>Vital Visuals</h5>
            <p>Video/Web/Email Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
