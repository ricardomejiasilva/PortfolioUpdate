import React from "react";
import Breadcrums from "../Components/Projects/Breadcrums";
import Contents from "../Components/Projects/Contents";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";

const Project = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <Header project={true}/>
      <Breadcrums  />
      <Contents id={id} />
    </div>
  );
};

export default Project;
