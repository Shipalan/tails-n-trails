import React, { useState } from "react";
import NavLinks from "./NavLinks";
import "./NavBar.css";
import { IoMdMenu } from "react-icons/io/index";


const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mobileNavigation">
      <IoMdMenu
        className="hamburgerMenu"
        size="40px"
        color="black"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="mobileNavLinks">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
