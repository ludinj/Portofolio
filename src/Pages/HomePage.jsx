import Particula from "../Components/Particles";
import { Header } from "./HomePage.style";
import FacebokIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
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
          Hi I'm
          <span> Ludin Jaimes</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos
            ullam velit nam fugiat cupiditate nobis, nostrum animi totam! Neque.
          </p>
          <div className="icons">
            <a
              href="https://www.youtube.com/watch?v=tiOChpaiFBc&list=WL&index=48&t=4652s"
              className="icon facebook"
            >
              <FacebokIcon />
            </a>
            <a
              href="https://www.youtube.com/watch?v=tiOChpaiFBc&list=WL&index=48&t=4652s"
              className="icon github"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.youtube.com/watch?v=tiOChpaiFBc&list=WL&index=48&t=4652s"
              className="icon youtube"
            >
              <YoutubeIcon />
            </a>
          </div>
        </h1>
      </div>
    </Header>
  );
};

export default HomePage;
