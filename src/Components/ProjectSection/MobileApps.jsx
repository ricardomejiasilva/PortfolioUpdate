import React from "react";
import WorksCard from "./WorksCard";
import WingAi from "../../assets/mobileapps1.png";
import Web from "../../assets/webcard.png";

const MobileApps = () => {
  const cardContent = [
    {
      id: "wingai",
      image: WingAi,
      title: "WingAI",
      skill: "React Native App",
      metrics: {
        primary: "2M+",
        primaryLabel: "Downloads",
        secondary: "4.8★",
        secondaryLabel: "Rating",
      },
    },
    {
      id: "webstaurantstore",
      image: Web,
      title: "WebstaurantStore",
      skill: "React Native App",
      metrics: {
        primary: "5K+",
        primaryLabel: "Daily Receipts",
        secondary: "Lead",
        secondaryLabel: "Developer",
      },
    },
  ];

  return (
    <div className="mobileAppsContainer">
      <h4>Mobile Apps</h4>
      <div className="row">
        <div className="col-12 col-lg-2"></div>
        {cardContent.map((item, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <WorksCard content={item} />
          </div>
        ))}
        <div className="col-12 col-lg-2"></div>
      </div>
    </div>
  );
};

export default MobileApps;
