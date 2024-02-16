import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 className="brand">RR-Sondermetalle</h1>
        </div>
        <Navbar />
        <div>right side</div>
      </div>
    </header>
  );
};

export default Header;
