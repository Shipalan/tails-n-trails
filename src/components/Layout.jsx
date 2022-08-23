import React from "react";

import NavBar from "./navigation/NavBar";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <div className="container">
      <NavBar />
      <main>{props.children}</main>
      <footer className="footerElement"></footer>
      </div>
    </Fragment>
  );
};

export default Layout;
