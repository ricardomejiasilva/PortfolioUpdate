import React from "react";
import man from "../../assets/Man.png";
import "./DeveloperInfo.css";

const DeveloperInfo = () => {
  return (
    <div className="row profileGap">
      <div className="col-12 col-lg-5 p-0 m-0">
        <img src={man} alt="" className="w-100 h-100" />
      </div>
      <div className="col-12 col-lg-7 p-0 m-0">
        <div className="infoContainer">
          <h3>Ricardo Mejia Silva</h3>
          <h5>Web/Mobile Developer</h5>
          <div className="border-start descriptionBox">
            <p>
              I am a self motivated, reliable developer with great
              problem-solving skills. I pay close attention to detail when
              conducting my work. I take great pride in everything I do and can
              ensure top quality results. I have an extensive working knowledge
              of HTML/CSS, JavaScript, React, Next and recently block chain
              development. Most importantly, I am passionate about gaining more
              experience and improving my skills.
            </p>
          </div>
          <div>
            <h6 style={{ marginBottom: "7px" }}>Work Experience</h6>

            <div className="experienceContainer">
              <div className="experience">
                <div>
                  <p>WebstaurantStore</p>
                  <p>September 2021 - present</p>
                </div>
                <p>Front-end/Mobile Developer</p>
              </div>

              <div className="experience">
                <div>
                  <p>
                    Zuliy <span>(Contract)</span>
                  </p>
                  <p>June 2022 - April 2022</p>
                </div>
                <p>Email Developer</p>
              </div>
              <div className="experience">
                <div>
                  <p>Vital Visuals</p>
                  <p>April 2017 - October 2021</p>
                </div>
                <p>Video/Web/Email Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfo;
