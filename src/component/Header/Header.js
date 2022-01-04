import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Layar Monitor 21
    </span>
  );
};

export default Header;
