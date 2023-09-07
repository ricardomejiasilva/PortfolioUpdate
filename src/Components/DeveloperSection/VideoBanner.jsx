import React from "react";
import videoBanner from "../../assets/videoImage.png";
import videoIcon from "../../assets/play.png";

const VideoBanner = () => {
  return (
    <div className="videoBannerContainer">
      <h3>Ricardo Mejia Silva</h3>
      <h6>Web/Mobile Developer</h6>
      <div className="videoContainer">
        <img src={videoBanner} alt="" className="w-100 h-100" />

        <a
          href="https://baynews9.com/fl/tampa/news/2023/07/14/wingai-uses-artificial-intelligence-to-be-a-wingman-on-dating-apps"
          target="_blank"
        >
          <img src={videoIcon} alt="" className="playIcon" />
        </a>
      </div>
    </div>
  );
};

export default VideoBanner;
