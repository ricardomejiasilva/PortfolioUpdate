import React, { useEffect, useRef } from "react";
import Nav from "../Components/Nav/Nav";
import Banner from "../Components/Home/Banner";
import Profile from "../Components/AboutSection/Profile";
import MyWorks from "../Components/ProjectSection/Projects";
import Footer from "../Components/Footer/Footer";
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
          <h1>
            Crafting captivating digital experiences that inspire and engage.
          </h1>
          <p className="mx-auto">
            Welcome to my world of mobile and web development, where innovation
            meets functionality. With a passion for creating seamless user
            experiences and cutting-edge solutions, I strive to bring ideas to
            life and leave a lasting impression.
          </p>
        </div>
      </div>
      <Profile aboutSection={aboutSection} />
      <MyWorks projectSection={projectSection} />
      <Footer />
    </>
  );
};

export default Home;
