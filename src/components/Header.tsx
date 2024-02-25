"use client";

import React from "react";
import Navbar from "./Navbar";
import Language from "./Language";
import Link from "next/link";
import { useParams } from "next/navigation";

const Header = () => {
  const { lang } = useParams();
  return (
    <header>
      <div className="container ">
        <Link href={`/${lang}`}>
          <div className="logo">
            <h1 className="brand">RR-Sondermetalle</h1>
          </div>
        </Link>
        <Navbar />
        <Language />
      </div>
    </header>
  );
};

export default Header;
