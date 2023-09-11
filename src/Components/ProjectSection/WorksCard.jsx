import React from "react";
import rightArrow from "../../assets/ArrowRight.png";
import { Link } from "react-router-dom";

const WorksCard = ({ content }) => {
  return (
    <Link to={`/project/${content.id}`}>
      <div className="workCardContainer">
        <div className="cardImageContainer">
          <img
            src={content?.image}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="cardTextContainer">
          <h6>
            <p href="#">{content.title}</p>
          </h6>
          <p>{content.skill}</p>
          <div>
            <p href="#">View Project</p>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorksCard;
