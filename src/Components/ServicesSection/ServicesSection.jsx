//components
import Title from "../Title/Title";
//Dependencis

import React, { useRef } from "react";

//styles
import { ServiceSectionStyle } from "./ServicesSection.style";
import { InerLayout } from "../../Styles/InerLayout";
import ServiceCard from "../ServiceCard/ServiceCard";

//images
import desing from "../../images/design.svg";
import intelligence from "../../images/intelligence.svg";
import gamedev from "../../images/gamedev.svg";
const ServicesSection = () => {
  return (
    <InerLayout>
      <ServiceSectionStyle>
        <Title title={"Services"} span={"Services"}></Title>
        <div className="services">
          <ServiceCard
            image={desing}
            title={" Web desing"}
            paragraph={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos omnis incidunt"
            }
          />
          <div className="mid-section">
            <ServiceCard
              image={gamedev}
              title={"Artifisial Intelligence"}
              paragraph={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos omnis incidunt"
              }
            />
          </div>
          <ServiceCard
            image={desing}
            title={"Game Dev"}
            paragraph={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos omnis incidunt"
            }
          />
        </div>
      </ServiceSectionStyle>
    </InerLayout>
  );
};

export default ServicesSection;
