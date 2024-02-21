import React from "react";
import Navbar from "./Navbar";
import Language from "./Language";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 className="brand">RR-Sondermetalle</h1>
        </div>
        <Navbar />
        <Language />
      </div>
    </header>
  );
};

export default Header;
