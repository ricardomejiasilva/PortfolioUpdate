import React from "react";

const WorkExperiences = () => {
  return (
    <div className="workExperienceContainer">
      <h5>Work Experience</h5>
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="workExpContainer">
            <h6>September 2021 - Present</h6>
            <h5>WebstaurantStore</h5>
            <p className="role">Lead Frontend Developer</p>
            <p className="impact">
              Built ExpensePro mobile app, leading team and architecture.
              Processing <strong>5K+ receipts daily</strong>.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="workExpContainer">
            <h6>2020 - Present</h6>
            <h5>WingAI</h5>
            <p className="role">Founder & Lead Developer</p>
            <p className="impact">
              Scaled to <strong>2M+ downloads</strong> with 4.8★ rating.
              Generated <strong>1B+ UGC views</strong>.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="workExpContainer">
            <h6>June 2022 - April 2023</h6>
            <h5>Zulily</h5>
            <p className="role">Email Developer (Contract)</p>
            <p className="impact">
              Developed high-converting email campaigns for e-commerce platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
