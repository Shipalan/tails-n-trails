import React from "react";

import NavBar from "./navigation/NavBar";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <main>{props.children}</main>
      <footer className="footerElement"></footer>
    </Fragment>
  );
};

export default Layout;
