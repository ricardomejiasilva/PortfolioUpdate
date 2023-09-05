import React from "react";
import WorksCard from "./WorksCard";
import web4 from "../../assets/monitor4.png";
import web5 from "../../assets/monitor5.png";
import web6 from "../../assets/monitor6.png";

const Emails = () => {
  const cardContent = [
    {
      id: "emails-1",
      image: web4,
      title: "Adobe",
      skill: "HTML Email",
    },
    {
      id: "emails-2",
      image: web5,
      title: "Apple",
      skill: "HTML Email",
    },
    {
      id: "emails-3",
      image: web6,
      title: "Chipotle",
      skill: "HTML Email",
    },
  ];
  return (
    <div className="webContainer">
      <h4>Emails</h4>
      <div className="row">
        {cardContent.map((item, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <WorksCard content={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emails;
