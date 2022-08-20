import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";


const NavBar = () => {
  return (
    <header className="navBar">
      <div className="logo">
        <h3>Tails & Trails</h3>
      </div>
      <div className="navGroup">
        <MobileNavigation />
        <Navigation />
      </div>
    </header>
  );
};

export default NavBar;
