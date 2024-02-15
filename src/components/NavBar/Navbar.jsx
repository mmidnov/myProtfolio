import { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import logo from "../../assets/M.png"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img src={logo} alt="" className="logo" /> */}
          <h1 className="logo">Munarbek</h1>

          <ul>
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#work" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#me" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbol-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
