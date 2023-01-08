import React from "react";

import "../../Assets/SCSS/header.scss";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import Menu from "./Menu";
const Header = () => {
  return (
    <div className="header">
      <Topbar />
      <Navbar />
      <Menu />
    </div>
  );
};

export default Header;
