import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const getMenuStyles = (opened) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: !opened ? "-100%" : "1.5rem" };
    }
  };

  const handleLinkClick = () => setMenuOpened(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container" ref={menuRef}>
        {/* Brand Logo */}
        <NavLink to="/" onClick={handleLinkClick}>
          <img src="./logo.png" alt="logo" width={100} className="h-logo" />
        </NavLink>

        {/* Navigation Menu */}
        <div
          className={`flexCenter h-menu ${menuOpened ? "menu-opened" : ""}`}
          style={getMenuStyles(menuOpened)}
        >
          <NavLink to="/residencies" onClick={handleLinkClick}>
            Residencies
          </NavLink>
          <NavLink to="/value" onClick={handleLinkClick}>
            Our Value
          </NavLink>
          <NavLink to="/contact-us" onClick={handleLinkClick}>
            Contact Us
          </NavLink>
          <NavLink to="/get-started" onClick={handleLinkClick}>
            Get Started
          </NavLink>
          <NavLink to="/contact-us" className="button" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </div>

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