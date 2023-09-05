import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Home/Banner";
import "../Components/Home/Home.css";
import Profile from "../Components/Profile/Profile";
import MyWorks from "../Components/MyWorks/MyWorks";

const Home = () => {
  return (
    <>
      <div className="banner">
        <Header />
        <Banner />
      </div>
      <Profile />
      <MyWorks />
    </>
  );
};

export default Home;
