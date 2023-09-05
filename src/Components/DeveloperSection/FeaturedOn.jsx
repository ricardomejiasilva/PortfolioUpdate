import React from "react";
import news1 from "../../assets/abcNews.png";
import news2 from "../../assets/spectrumNews.png";
import news3 from "../../assets/foxNews.png";

const FeaturedOn = () => {
  return (
    <div className="featuredOnContainer">
      <h5>Featured On</h5>
      <div className="row g-4">
        <div className=" col-12 col-lg-4 ">
          <div className="newsContainer">
            <img src={news1} alt="" />
          </div>
        </div>
        <div className=" col-12 col-lg-4 ">
          <div className="newsContainer">
            <img src={news2} alt="" />
          </div>
        </div>
        <div className=" col-12 col-lg-4 ">
          <div className="newsContainer">
            <img src={news3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
