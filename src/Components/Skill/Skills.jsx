//Dependencis
import React from "react";
//Components
import Title from "../Title/Title";
//Styles
import { SkillStyle } from "./Skill.style";
//Images
//Layouts
import { MainLayout, InerLayout } from "../../Styles/InerLayout";
import ProgresBar from "../ProgresBar/ProgresBar";

const Skills = () => {
  return (
    <SkillStyle>
      <Title title={"MY SKILLS"} span={"MY SKILLS"}></Title>
      <InerLayout>
        <div className="skills">
          <div className="front-end">
            <ProgresBar title={"HTML5"} width={"85%"} text={"85%"}></ProgresBar>
            <ProgresBar title={"CSS"} width={"90%"} text={"90%"}></ProgresBar>
            <ProgresBar
              title={"javascript"}
              width={"85%"}
              text={"85"}
            ></ProgresBar>
            <ProgresBar
              title={"REACT.js"}
              width={"75%"}
              text={"75%"}
            ></ProgresBar>
          </div>
          <div className="back-end">
            <ProgresBar
              title={"node.js"}
              width={"50%"}
              text={"50%"}
            ></ProgresBar>
            <ProgresBar title={"java"} width={"70%"} text={"70%"}></ProgresBar>
            <ProgresBar
              title={"spring framework"}
              width={"50%"}
              text={"50%"}
            ></ProgresBar>
            <ProgresBar title={"sql"} width={"50%"} text={"50%"}></ProgresBar>
          </div>
        </div>
      </InerLayout>
    </SkillStyle>
  );
};

export default Skills;
