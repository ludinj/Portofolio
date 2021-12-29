import React from "react";
import { ServiceWrapper } from "./ServiceCard.style";
function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceWrapper>
      <div className="container">
        <img src={image} alt="tst" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceWrapper>
  );
}

export default ServiceCard;
