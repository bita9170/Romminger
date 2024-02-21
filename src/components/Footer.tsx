"use client";

import React from "react";

const Footer = ({ lang }: any) => {
  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open("mailto:info@rr-sondermetalle.com", "_blank");
  };
  return (
    <footer className="footer">
      <aside>
        <span className="footer-title">RR-Sondermetalle</span>
        <p>
          <i className="fa-solid fa-location-dot"></i>
          Gottlob-Bauknecht-Straße 26  <br />
          75365 Calw Germany
        </p>
        <p>
          <i className="fa-solid fa-phone"></i>
          +49 7051 967 0 <br />
          <i className="fa-solid fa-envelope"></i>
          <a href="#" onClick={handleEmailClick}>
            info@rr-sondermetalle.com
          </a>
        </p>
        <p className="copyright">
          Copyright © 2024 - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
