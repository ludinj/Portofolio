import React from "react";
import Skills from "../Components/Skill/Skills";
import { ResumeStyle } from "./ResumePage.style";
import { MainLayout } from "../Styles/InerLayout";
import Resume from "../Components/Resume/Resume";
const ResumePage = () => {
  return (
    <ResumeStyle>
      <MainLayout>
        <Skills />
        <Resume />
      </MainLayout>
    </ResumeStyle>
  );
};

export default ResumePage;
