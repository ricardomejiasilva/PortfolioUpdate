import React from "react";
import rightArrow from "../../assets/ArrowRight.png";
import { Link } from "react-router-dom";

const WorksCard = ({ content }) => {
  console.log(content.id);
  return (
    <Link to={`/project/${content.id}`}>
      <div className="workCardContainer">
        <div className="cardImageContainer">
          <img
            style={
              content.id === "webstaurantstore"
                ? { position: "relative", top: -16 }
                : {}
            }
            src={content?.image}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="cardTextContainer">
          <h6>
            <a href="#">{content.title}</a>
          </h6>
          <p>{content.skill}</p>
          <div>
            <a href="#">View Project</a>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorksCard;