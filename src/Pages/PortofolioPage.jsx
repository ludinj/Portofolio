import React, { useState } from "react";
import Title from "../Components/Title/Title";
import { InerLayout, MainLayout } from "../Styles/InerLayout";
import { PortofolioStyle } from "./PortofolioPage.style";
import Menu from "../Components/Menu/Menu";
import { portfolios } from "../Data/PortofolioData";
import ButtonSm from "../Components/ButtonSm/ButtonSm";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];
const PortofolioPage = () => {
  const [mainMenu, setMainMenu] = useState(portfolios);
  const [button, setButton] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMainMenu(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => item.category === button);

    setMainMenu(filteredData);
  };

  return (
    <PortofolioStyle>
      <MainLayout>
        <Title title={"Portofolio"} span={"Portofolio"} />
        <InerLayout>
          <ButtonSm button={button} filter={filter} />
          <Menu menuItem={mainMenu}></Menu>
        </InerLayout>
      </MainLayout>
    </PortofolioStyle>
  );
};

export default PortofolioPage;
