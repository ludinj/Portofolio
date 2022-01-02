import React from "react";
import { Wrapper } from "./SideBar.style";
import NavBar from "./NavBar";
const SideBar = ({ navToggle }) => {
  return (
    <Wrapper className={`${navToggle ? "nav-toggle" : ""}`}>
      <NavBar />
    </Wrapper>
  );
};

export default SideBar;
