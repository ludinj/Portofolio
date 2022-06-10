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

  const experience = [
    {
      id: 1,
      title: "Jr Software Developer",
      year: "2019- 2021",
      subtitle: "Palmar technologies C.A",
      text:
        "  In my position as Software Engineer with Palmar Technologies C.A, I was involved with project planning, design" +
        " and testing within the Software Product Development team. Through innovative thinking I used the latest standards in HTML5 JavaScript CSS to design interactive UI, creating an efficient project development time line. During the design stage I met with customers to better understand customer needs and perspectives.",
    },

    {
      id: 2,
      title: "Software developer intern",
      year: "2018- 2019",
      subtitle: "Universidad Rafael Belloso",
      text: "During my internship I was guided in the fundamentals of computer science and helped to design, test single page web applications in the javascript language.",
    },
    {
      id: 3,
      title: "Computer science",
      year: "2015- 2018",
      subtitle: "Universidad Rafael Belloso",
    },
    {
      id: 4,
      title: "Computer science boot camp",
      year: "2018",
      subtitle: "Universidad Rafael Belloso",
    },
  ];

  return (
    <ResumeStyle>
      <Title title={"Resume"} span={"Resume"} />

      <InerLayout>
        <div className="small-title">
          <SmallTitle title={"Working experience"} icon={brifcase} />
        </div>
        <div className="resume-content">
          <ResumeItem experience={experience[0]} />
          <ResumeItem experience={experience[1]} />
        </div>

        <div className="small-title">
          <SmallTitle title={"Education"} icon={School1} />
        </div>

        <div className="resume-content">
          <ResumeItem experience={experience[2]} />
          <ResumeItem experience={experience[3]} />
        </div>
      </InerLayout>
    </ResumeStyle>
  );
};

export default Resume;
