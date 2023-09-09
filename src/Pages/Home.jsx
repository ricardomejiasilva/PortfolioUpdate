import React from "react";
import Nav from "../Components/Nav/Nav"
import Banner from "../Components/Home/Banner";
import "../Components/Home/Home.css";
import Profile from "../Components/Profile/Profile";
import MyWorks from "../Components/MyWorks/MyWorks";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="banner">
        <Nav />
        <Banner />
      </div>
      <Profile />
      <MyWorks />
      <Footer />
    </>
  );
};

export default Home;
