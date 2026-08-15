import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (opened) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: !opened ? "-100%" : "1.5rem" };
    }
  };

  const handleLinkClick = () => {
    setMenuOpened(false);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* Brand Logo */}
        <img src="./logo.png" alt="logo" width={100} className="h-logo" />

        {/* Navigation Menu */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div
            className={`flexCenter h-menu ${menuOpened ? "menu-opened" : ""}`}
            style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies" onClick={handleLinkClick}>
              Residencies
            </a>
            <a href="#value" onClick={handleLinkClick}>
              Our Value
            </a>
            <a href="#contact-us" onClick={handleLinkClick}>
              Contact Us
            </a>
            <a href="#get-started" onClick={handleLinkClick}>
              Get Started
            </a>
            <button className="button" onClick={handleLinkClick}>
              <a href="#contact-us">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* Mobile Hamburger Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;