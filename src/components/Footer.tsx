"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Footer = () => {
  const { lang } = useParams();
  return (
    <footer className="footer">
      <div className="container">
        <div className="container-inner">
          <Link href={`/${lang}`}>
            <div className="logo">
              <h1 className="brand">RR-Sondermetalle</h1>
            </div>
          </Link>

          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4 items-center">
            <p>
              <i className="fa-solid fa-location-dot mr-2"></i>
              Gottlob-Bauknecht-Straße 26 <br />
              <span className="ml-5">75365 Calw Germany</span>
            </p>
            <p>
              <i className="fa-solid fa-phone mr-2"></i>
              +49 (0)7051 8059030 <br />
              <i className="fa-solid fa-envelope mr-2"></i>
              <a href="#">info@rr-sondermetalle.com</a>
            </p>
          </div>
            <p className="copyright ">
              Copyright © 2024 - All right reserved
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
