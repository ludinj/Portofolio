import { SmallTitleStyle } from "./SmallTitle.style";
import React from "react";

const SmallTitle = ({ title, icon }) => {
  return (
    <SmallTitleStyle>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyle>
  );
};

export default SmallTitle;
