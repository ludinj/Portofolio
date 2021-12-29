import React from "react";
import { ProgresBarStyle } from "./ProgresBar.style";
const ProgresBar = ({ title, text, width }) => {
  return (
    <ProgresBarStyle>
      <h6>{title}</h6>
      <div className="progres-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgresBarStyle>
  );
};

export default ProgresBar;
