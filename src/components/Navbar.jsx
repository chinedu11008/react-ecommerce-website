import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { Link } from "react-scroll"
import { BsFillMoonFill } from "react-icons/bs";
function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavState(false));
  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <span>Affinity</span>
          <span className="dot">.</span>
        </div>
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
            <div onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          </div>
          <div className={`links ${navState ? "responsive-toggle" : ""}`}>
            <ul>
              <li>
                <a href="#"><Link to="home" spy={true} smooth={true}>
                Home
              </Link></a>
              </li>
              <li>
                <a href="">
              <Link to="services" spy={true} smooth={true}>
                Deals
              </Link>
              </a>
              </li>
              <li>
                <a href="">
              <Link to="categories" spy={true} smooth={true}>
                Categories
              </Link>
              </a>
              </li>
              <li>
                <a href="#"><Link to="recommended" spy={true} smooth={true}>
                Recommended
              </Link></a>
              </li>
              <li>
                <a href="#"> Account</a>
              </li>
              <li onClick={changeTheme} className="color-mode">
                {currentTheme === "dark" ? (
                  <ImSun className="sun" />
                ) : (
                  <BsFillMoonFill className="moon" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;
