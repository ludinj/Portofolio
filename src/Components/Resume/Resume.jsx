import { MainLayout, InerLayout } from "../../Styles/InerLayout";
import ResumeItem from "../ResumeItem/ResumeItem";
import Title from "../Title/Title";
import { ResumeStyle } from "./Resume.style";
import BrifcaseIcon from "@material-ui/icons/BusinessCenter";
import BooKIcon from "@material-ui/icons/Book";
import SchoolIcon from "@material-ui/icons/School";
import React from "react";
import SmallTitle from "../SmalTitle/SmallTitle";

const Resume = () => {
  const brifcase = <BrifcaseIcon />;
  const bookIcon = <BooKIcon />;
  const School1 = <SchoolIcon />;

  const experience = {
    title: "Computer science",
    year: "2015- 2018",
    subtitle: "Universidad Rafael Belloso",
    text:
      "During this time i worked as an inter developing and maintaining software Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa tempore dolores totam?" +
      "Possimus consequuntur at perspiciatis suscipit commodi adipisci.",
  };

  return (
    <ResumeStyle>
      <Title title={"Resume"} span={"Resume"} />

      <InerLayout>
        <div className="small-title">
          <SmallTitle title={"Working experience"} icon={brifcase} />
        </div>
        <div className="resume-content">
          <ResumeItem experience={experience} />
          <ResumeItem experience={experience} />
        </div>

        <div className="small-title">
          <SmallTitle title={"Education"} icon={School1} />
        </div>

        <div className="resume-content">
          <ResumeItem experience={experience} />
          <ResumeItem experience={experience} />
        </div>
      </InerLayout>
    </ResumeStyle>
  );
};

export default Resume;
