import Particula from "../Components/Particles";
import { Header } from "./HomePage.style";
import FacebokIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowParticles(true);
    }, 100);
  }, []);

  return (
    <Header>
      <div className="particulas">
        {showParticles && <Particula></Particula>}
      </div>
      <div className="typography">
        <h1>
          Hi, I'm
          <span> Ludin Jaimes</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos
            ullam velit nam fugiat cupiditate nobis, nostrum animi totam! Neque.
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/ludin-jaimes-6140a41b1/"
              className="icon facebook"
            >
              <FacebokIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/ludin-jaimes-6140a41b1/"
              className="icon youtube"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/ludinj/" className="icon github">
              <GithubIcon />
            </a>
          </div>
        </h1>
      </div>
    </Header>
  );
};

export default HomePage;
