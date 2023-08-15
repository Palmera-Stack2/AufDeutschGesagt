import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import pinImg from "../../assets/flag-pin.png";

import "../sections/Navbar.css";


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };



  return (
    <nav className="nav-bar">
      <img
        className="navbar-img"
        src={pinImg}
        alt="flag-pin"
      ></img>



      <div className="navbar-wrapper">
        <div className="navbar-container">
          <ul className={`navbar-menu ${isNavOpen ? "open" : ""}`}>
            <HashLink to={"/#home"}>
              {" "}
              <li >Start</li>{" "}
            </HashLink>
            <HashLink to={"/#about"}>
              {" "}
              <li>Über mich</li>{" "}
            </HashLink>
            <HashLink to={"/#podcasts"}>
              {" "}
              <li>Podcast</li>{" "}
            </HashLink>
            <HashLink to={"/#blog"}>
              {" "}
              <li>Blog</li>{" "}
            </HashLink>
            <HashLink to={"/#ünterstützen"}>
              {" "}
              <li>Unterstützen</li>{" "}
            </HashLink>
            <HashLink to={"/#kontakt"}>
              {" "}
              <li>Kontakt</li>{" "}
            </HashLink>


          </ul>
          {/* <FontAwesomeIcon className="fontawesome" icon={faPenNib} /> */}
        </div>



        <div className="hrDiv"><hr className=" navbar-underline" /></div>

        <div>
          {isNavOpen ? (
            <div onClick={toggleNav}><div className="x"><FontAwesomeIcon className="fontawesomeX" icon={faXmark} /></div></div>
          ) : (
            <div
              className={isNavOpen ? "navbar-hamburger-hide" : "navbar-hamburger"}
              onClick={toggleNav}
            >
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
