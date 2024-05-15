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

        <div className="newsContainer forbes">
          <a
            target="_blank"
            href="https://www.forbes.com/sites/jiawertz/2024/03/25/how-ai-is-redefining-social-interactions-in-the-digital-age/?sh=c0f1fe867d85"
          >
            <img
              src="https://freelogopng.com/images/all_img/1684047438forbes-logo-png.png"
              alt=""
            />
          </a>
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
