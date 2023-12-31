import React from "react";
import WorksCard from "./WorksCard";
import web1 from "../../assets/monitor1.png";
import web2 from "../../assets/monitor2.png";
import web3 from "../../assets/monitor3.png";

const Web = () => {
  const cardContent = [
    {
      id: "clark",
      image: web1,
      title: "Clark Associates",
      skill: "Company Page",
    },
    {
      id: "comfy",
      image: web2,
      title: "Comfy Store",
      skill: "E-commerce App",
    },
    {
      id: "new-roots",
      image: web3,
      title: "New Roots",
      skill: "Product Page",
    },
  ];
  return (
    <div className="webContainer">
      <h4>Web</h4>
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

export default Web;
