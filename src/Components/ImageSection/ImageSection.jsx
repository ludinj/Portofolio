import React from "react";
import { ImageWrapper } from "./ImageSection.style";
import TempImage from "../../images/Cambiar.png";
import PrimaryButton from "../PrimaryBottom/PrimaryButton";

const ImageSection = () => {
  return (
    <ImageWrapper>
      <div className="left-content">
        <img src={TempImage} alt="temp"></img>
      </div>
      <div className="rigth-content">
        <h4>
          I am <span>Ludin Jaimes</span>
        </h4>

        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dolores
          nisi id laboriosam eveniet totam deleniti porro vitae in, neque ut
          error iure at repudiandae.
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
