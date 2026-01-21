import React from "react";
import { Link } from "react-router-dom";
import WingAiImage from "../../assets/mobileapps1.png";

const FeaturedProject = () => {
  return (
    <section className="featured-project">
      <div className="container pad">
        <p className="section-label">Featured Project</p>
        <h2>My Biggest Accomplishment</h2>

        <div className="featured-content">
          <div className="featured-image">
            <img src={WingAiImage} alt="WingAI App" />
          </div>

          <div className="featured-info">
            <h3>WingAI</h3>
            <p className="app-type">AI-Powered Dating Assistant</p>
            <p>
              Built and scaled a consumer mobile app from zero to over 2 million
              downloads. Led product strategy, development, and growth initiatives
              that generated over 1 billion views through user-generated content.
            </p>

            <div className="featured-metrics">
              <div className="featured-metric">
                <span className="number">2M+</span>
                <span className="label">Downloads</span>
              </div>
              <div className="featured-metric">
                <span className="number">4.8★</span>
                <span className="label">App Store Rating</span>
              </div>
              <div className="featured-metric">
                <span className="number">30K+</span>
                <span className="label">Reviews</span>
              </div>
            </div>

            <Link to="/project/wingai" className="featured-cta">
              View Case Study
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
