import React from "react";
import "./NavBar.css";

const NavLinks = () => {
  return (
    <nav className="navBarLinks">
      <ul>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
      <div className="cart">
        <li>Cart</li>
      </div>
      </ul>
    </nav>
  );
};

export default NavLinks;
