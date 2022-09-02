import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <nav className="navBarLinks mobileNavLinks">
      <ul className="navList">
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
