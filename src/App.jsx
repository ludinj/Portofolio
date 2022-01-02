import "./App.css";
import MainContent from "./Components/MainContent/MainContent";
import SideBar from "./Components/Sidebar/SideBar";

import Brightness6Icon from "@mui/icons-material/Brightness6";
import Switch from "@material-ui/core/Switch";
import { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [navToggle, setNavToggle] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="App">
      <SideBar navToggle={navToggle}></SideBar>

      <div className="ham-burger-menu">
        <IconButton onClick={toggleNav}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="theme">
        <div className="ligth-dark-mode">
          <Brightness6Icon />
          <Switch
            value=""
            checked={checked}
            inputProps={{ "aria-label": "" }}
            size="medium"
            onClick={themeToggler}
          />
        </div>
      </div>
      <MainContent />
    </div>
  );
}

export default App;
