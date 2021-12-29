import React from "react";
import HomePage from "../../Pages/HomePage";
import { MainWrapper } from "./MainContent.style";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../../Pages/AboutPage";
import ResumePage from "../../Pages/ResumePage";
import ContactPage from "../../Pages/ContacPage";
import PortofolioPage from "../../Pages/PortofolioPage";
import { useState } from "react";
const MainContent = () => {
  const [mainMenu, setMainMenu] = useState();
  return (
    <>
      <MainWrapper>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/resume" exact element={<ResumePage />} />
          <Route path="/portofolios" exact element={<PortofolioPage />} />
          <Route path="/blogs" exact element={<AboutPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
      </MainWrapper>
    </>
  );
};

export default MainContent;
