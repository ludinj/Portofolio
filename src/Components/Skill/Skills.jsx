//Dependencis
import React from "react";
//Components
import Title from "../Title/Title";
//Styles
import { SkillStyle } from "./Skill.style";
//Images
//Layouts
import { InerLayout } from "../../Styles/InerLayout";
import ProgresBar from "../ProgresBar/ProgresBar";

const Skills = () => {
  return (
    <SkillStyle>
      <Title title={"MY SKILLS"} span={"MY SKILLS"}></Title>
      <InerLayout>
        <div className="skills">
          {/* //<div className="front-end"> </div> */}
          <ProgresBar title={"HTML5"} width={"90%"} text={"90%"}></ProgresBar>
          <ProgresBar title={"CSS"} width={"90%"} text={"90%"}></ProgresBar>
          <ProgresBar
            title={"javascript"}
            width={"95%"}
            text={"85%"}
          ></ProgresBar>
          <ProgresBar
            title={"REACT.js"}
            width={"85%"}
            text={"85%"}
          ></ProgresBar>

          <ProgresBar title={"Node.js"} width={"60%"} text={"60%"}></ProgresBar>
          <ProgresBar title={"Java"} width={"50%"} text={"50%"}></ProgresBar>
          <ProgresBar
            title={"spring framework"}
            width={"50%"}
            text={"50%"}
          ></ProgresBar>
          <ProgresBar title={"sql"} width={"50%"} text={"50%"}></ProgresBar>
        </div>
      </InerLayout>
    </SkillStyle>
  );
};

export default Skills;
