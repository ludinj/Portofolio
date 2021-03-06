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
            title={"Web design"}
            paragraph={
              "Experience in the latest web development standards using Javascript, CSS, React.js and other frame works to design develop a deploy modern web pages"
            }
          />
          <div className="mid-section">
            <ServiceCard
              image={intelligence}
              title={"Rest API"}
              paragraph={
                "Developing Rest API using Node.js and Express.js to perform CRUD operations to connect to a data base "
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Game Dev"}
            paragraph={"In process.."}
          />
        </div>
      </ServiceSectionStyle>
    </InerLayout>
  );
};

export default ServicesSection;
