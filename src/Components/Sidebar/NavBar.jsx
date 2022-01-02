import { Wrapper } from "./Navbar.style";
import { NavLink } from "react-router-dom";
import avatar from "../../images/fotoperfil2.jpg";
const NavBar = () => {
  return (
    <Wrapper>
      <div className="avatar">
        <img src={avatar} alt="avatar" className="image" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeclassname="active">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portofolios">Portofolio</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/blogs" activeclassname="active">
            Blogs
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 Portofolio</p>
      </footer>
    </Wrapper>
  );
};

export default NavBar;
