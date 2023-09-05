import React from "react";
import "./SkillInfo.css";
import html from "../../assets/htmllogo.png";
import css from "../../assets/csslogo.png";
import js from "../../assets/jslogo.png";
import react from "../../assets/reactlogo1.png";
import reactNative from "../../assets/reactlogo.png";
import nextjs from "../../assets/nextjsLogo.png";
import node from "../../assets/nodejslogo.png";
import mongodb from "../../assets/mongodblogo.png";
import express from "../../assets/Group 1171280991.png";
import SkillInfoCard from "./SkillInfoCard";

const SkillsInfo = () => {
  const skills = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "Java Script",
      image: js,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "React native",
      image: reactNative,
    },
    {
      name: "Next js",
      image: nextjs,
    },
    {
      name: "Node js",
      image: node,
    },
    {
      name: "Mongo DB",
      image: mongodb,
    },
    {
      name: "Express JS",
      image: express,
    },
  ];

  return (
    <div className="row skillInfoContainer">
      <div className="col-12 col-lg-6  m-0">
        <div className="mySubjectContainer">
          <h2>My subject matter expertise</h2>
          <p>
            I have an extensive working knowledge of application and web
            development.{" "}
          </p>
          <button className="btn">Get in Touch</button>
        </div>
      </div>
      <div className="col-12 col-lg-6  m-0 p-0">
        <div className="d-flex flex-wrap justify-content-center skillInfoCards">
          {skills.map((item, idx) => (
            <SkillInfoCard key={idx} skill={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsInfo;
