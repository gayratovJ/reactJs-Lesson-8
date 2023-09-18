import React from "react";
import bars from "../../assets/Frame.svg";
import logo from "../../assets/Frame.png";
import video from "../../assets/Frame 4.png";

import "./Header.module.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
        <img className="bars" src={bars} alt="" />
          <img src={logo} alt="" />
        </div>
        <input type="text" placeholder="Search" />
        <div className="acc">
          <img src={video} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
