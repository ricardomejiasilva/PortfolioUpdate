import React, { useEffect, useRef } from "react";
import Nav from "../Components/Nav/Nav";
import Profile from "../Components/AboutSection/Profile";
import MyWorks from "../Components/ProjectSection/Projects";
import Footer from "../Components/Footer/Footer";
import FeaturedProject from "../Components/Home/FeaturedProject";
import "../Components/Home/Home.css";

const Home = () => {
  const aboutSection = useRef(null);
  const projectSection = useRef(null);
  const currentURL = window.location.pathname + window.location.hash;

  useEffect(() => {
    console.log(currentURL);
    if (currentURL === "/#about") {
      window.scrollTo({
        top: aboutSection.current.offsetTop,
        behavior: "smooth",
      });
    } else if (currentURL === "/#project") {
      window.scrollTo({
        top: projectSection.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentURL]);

  return (
    <>
      <div className="banner">
        <Nav />
        <div className="bannerContainer container pad">
          <p className="hero-subtitle">Product Leader & Mobile Developer</p>
          <h1>I build products that scale to millions</h1>
          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-number">2M+</span>
              <span className="metric-label">Downloads</span>
            </div>
            <div className="metric">
              <span className="metric-number">1B+</span>
              <span className="metric-label">UGC Views</span>
            </div>
            <div className="metric">
              <span className="metric-number">4.8★</span>
              <span className="metric-label">App Rating</span>
              <span className="metric-detail">30K Reviews</span>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProject />
      <Profile aboutSection={aboutSection} />
      <MyWorks projectSection={projectSection} />
      <Footer />
    </>
  );
};

export default Home;
