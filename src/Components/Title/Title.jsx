import gsap from "gsap";

import React, { useRef } from "react";
import { TitleStyle } from "./Title.style";
import { useIntersection } from "react-use";
function Title({ title, span }) {
  const sectionRef = useRef(null);
  const intesection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  // const fadeout = (element) => {};
  // const fadein = (element) => {
  //   gsap.to(element, 0.8, {
  //     marginLeft: "0px",
  //     opacity: 1,
  //   });
  // };
  // intesection && intesection.intersectionRatio < 1
  //   ? fadein(".fadeIn")
  //   : fadeout(".fadeIn");

  //To Do: make  the fade out
  return (
    <TitleStyle ref={sectionRef} className="fadeIn">
      <h2>
        {title} <span>{span}</span>
      </h2>
    </TitleStyle>
  );
}

export default Title;
