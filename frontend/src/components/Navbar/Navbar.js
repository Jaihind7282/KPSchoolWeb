import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarItems } from "./NavbarItems";

function Navbar() {
  const [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const handleMenuItemClick = () => {
    setState({ clicked: false });
  };

  const handleMouseLeave = () => {
    setState({ clicked: false });
  };

  const handleScroll = () => {
    setState({ clicked: false });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-image-div">
        <img
          src="images\school-logo.png"
          alt="Logo"
          className="navbar-image"
        ></img>
      </div>
      <nav className="NavbarItems" onMouseLeave={handleMouseLeave}>
        <div>
          <Link to="/" className="nav-links-2">
            HOME
          </Link>
          <Link to="/registration" className="nav-links-2">
            REGISTRATION <i class="fa-solid fa-caret-down"></i>
          </Link>
        </div>

        <div className="menu-icons" onClick={handleClick}>
          <i className={state.clicked ? "fas fa-bars" : "fas fa-bars"}></i>
        </div>

        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavbarItems.map((itme, index) => {
            return (
              <>
                <li key={index}>
                  <Link
                    className={itme.cName}
                    to={itme.url}
                    onClick={handleMenuItemClick}
                  >
                    {itme.title}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
