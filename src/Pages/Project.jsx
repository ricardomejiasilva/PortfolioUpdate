import React from "react";
import Breadcrums from "../Components/Projects/Breadcrums";
import Contents from "../Components/Projects/Contents";
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

const Project = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <Nav />
      <Breadcrums />
      <Contents id={id} />
    </div>
  );
};

export default Project;
