import React, { useEffect, useRef } from "react";
import Nav from "../Components/Nav/Nav"
import Banner from "../Components/Home/Banner";
import "../Components/Home/Home.css";
import Profile from "../Components/Profile/Profile";
import MyWorks from "../Components/MyWorks/MyWorks";
import Footer from "../Components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  const aboutSection = useRef(null);
  const projectSection = useRef(null);

  useEffect(() => {
    console.log(pathname);
    if (pathname === "#about") {
      window.scrollTo({
        top: aboutSection.current.offsetTop,
        behavior: "smooth",
      });
    } else if (pathname === "#project") {
      window.scrollTo({
        top: projectSection.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <div className="banner">
        <Nav />
        <Banner />
      </div>
      <Profile aboutSection={aboutSection} />
      <MyWorks projectSection={projectSection} />
      <Footer />
    </>
  );
};

export default Home;
