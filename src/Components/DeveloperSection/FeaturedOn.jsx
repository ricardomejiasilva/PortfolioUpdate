import React from "react";
import news1 from "../../assets/abcNews.png";
import news2 from "../../assets/spectrumNews.png";
import news3 from "../../assets/fox-logo.png";

const FeaturedOn = () => {
  return (
    <div className="featuredOnContainer">
      <h5>Featured On</h5>
      <div className="new-logos">
        <div className="newsContainer">
          <img src={news1} alt="" />
        </div>

        <div className="newsContainer">
          <img src={news2} alt="" />
        </div>

        <div className="last-container">
          <div className="newsContainer last">
            <img src={news3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
