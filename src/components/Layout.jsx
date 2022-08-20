import React from "react";

import NavBar from "./navigation/NavBar";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <div className="container">
        <nav className="navBarLinks">
          <NavBar />
        </nav>
      </div>
      <main>{props.children}</main>
      <footer className="footerElement"></footer>
    </Fragment>
  );
};

export default Layout;
