import React from "react";
import { ImageWrapper } from "./ImageSection.style";
import webTemplate from "../../images/wevDeveloper.jpg";
import PrimaryButton from "../PrimaryBottom/PrimaryButton";

const ImageSection = () => {
  return (
    <ImageWrapper>
      <div className="left-content">
        <img src={webTemplate} alt="temp"></img>
      </div>
      <div className="rigth-content">
        <h4>
          I am <span>Ludin Jaimes</span>
        </h4>

        <p className="paragraph">
          Hello, I am software developer focused on designing, programming,
          testing and maintaining computer and software systems for the purpose
          of solving problems for users.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nacionality</p>
            <p>Leguange</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: Ludin Jaimes</p>
            <p>: 30</p>
            <p>: Venezuelan</p>
            <p>: Spanish-English</p>
            <p>: Venezuela</p>
          </div>
        </div>
        <PrimaryButton title=" Download CV" />
      </div>
    </ImageWrapper>
  );
};

export default ImageSection;
