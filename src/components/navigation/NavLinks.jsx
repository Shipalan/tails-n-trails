import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="navBarLinks">
      <ul className="navList">
        <NavLink to="/Shop">Shop</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
      </ul>
    </nav>
  );
};

export default NavLinks;
