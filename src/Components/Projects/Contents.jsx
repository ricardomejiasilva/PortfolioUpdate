import React from "react";
import "./Content.css";
import image from "../../assets/contentImage.png";
import image2 from "../../assets/contentImage1.png"

const Contents = ({ id }) => {
  return (
    <div className="projectContentContainer">
      <h3>{id === "mobile-app-2" ? "New Roots" : "Clark Associates"}</h3>
      <p className="mx-auto projectCategory">{id ==="mobile-app-2" ? "Remade a responsive web page for a stakeholder by usingHTML,TailWind, Next.JS & TypeScript.":"React App"}</p>
      <div className="imageContainer">
        <img src={id==="mobile-app-2" ? image2:image} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Fames a velit sit mi egestas at.
        Elementum sed purus sed augue sed sed eleifend nunc libero. Tellus
        mattis placerat metus amet nam. Nibh eget varius a eu interdum sit
        suscipit sollicitudin nisl. Id et adipiscing posuere ut faucibus sed
        proin. Sit sed ornare interdum pellentesque maecenas est feugiat erat
        duis. Vitae ut metus enim in vel varius pretium tortor a. Massa leo et
        neque mauris. Quis cras amet mollis tortor sed turpis sed. Mauris non
        sem molestie eu eget aliquet lobortis faucibus amet. Eget mi etiam in
        sit eget. Tincidunt dignissim consectetur libero porttitor.
      </p>
      <div className="buttonContainer">
        <button className="btn">Launch Project</button>
        <button className="btn">See Code</button>
      </div>
    </div>
  );
};

export default Contents;
