import React from "react";
import logo from "../components/logo.svg"

function Header() {
  return (
    <header>
      
      <h1><img src={logo} className="bulb" alt="bulb"></img>iNotes Mo Yan</h1>
    </header>
  );
}

export default Header;
