import React from "react";

import { ResumeItemStyle } from "./ResumeItem.style";
const ResumeItem = ({ experience }) => {
  return (
    <ResumeItemStyle>
      <div className="left-content">
        <p>{experience.year}</p>
      </div>
      <div className="rigth-content">
        <h5>{experience.title}</h5>
        <h6>{experience.subtitle}</h6>
        <p>{experience.text}</p>
      </div>
    </ResumeItemStyle>
  );
};

export default ResumeItem;
