import React, { useState } from "react";
import "./NavBar.css";
import { IoMdMenu } from "react-icons/io/index";
import NavLinks from "./NavLinks";

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
        <div>
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
