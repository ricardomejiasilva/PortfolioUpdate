import React from "react";

export default function SkillInfoCard({ skill }) {
  return (
    <div className="skillBox">
      <img src={skill.image} alt="" />
      <p>{skill.name}</p>
    </div>
  );
}
