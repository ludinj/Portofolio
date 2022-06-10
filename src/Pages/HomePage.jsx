import Particula from "../Components/Particles";
import { Header } from "./HomePage.style";
import GithubIcon from "@material-ui/icons/GitHub";
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
            Hello, I am software developer focused on designing, programming,
            testing and maintaining computer and software systems for the
            purpose of solving problems for users.
          </p>
          <div className="icons">
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
