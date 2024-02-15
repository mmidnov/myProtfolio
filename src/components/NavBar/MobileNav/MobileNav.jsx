
import './MobileNav.css'
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1 className="logo">Munarbek</h1>
          {/* <img src="./assest/M.png" alt="" />     */}

          <ul>
            <li>
              <a href="" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
