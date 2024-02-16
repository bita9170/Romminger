"use client";

import Link from "next/link";
import React from "react";
import navbar from "@/data/navbar.json";
import { useParams } from "next/navigation";

const Navbar = () => {
  const { lang } = useParams();
  return (
    <nav>
      <ul>
        {navbar.map((item, index) => (
          <li key={index}>
            <Link href={`/${lang}${item.href}`}>
              {lang === "de" ? item.label.de : item.label.en}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
