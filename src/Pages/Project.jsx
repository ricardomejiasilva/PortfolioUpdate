import React from "react";
import Breadcrums from "../Components/Projects/Breadcrums";
import Contents from "../Components/Projects/Contents";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <Breadcrums  />
      <Contents id={id} />
    </div>
  );
};

export default Project;
