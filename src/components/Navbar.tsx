"use client";

import React from "react";
import NavItems from "./NavItems";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItemsMobile from "./NavItemsMobile";

const Navbar = () => {
  return (
    <div className="main-menu">
      <NavItems />
      <Sheet>
        <SheetTrigger asChild>
          <span className="hamburger-menu">
            <HamburgerMenuIcon className="h-4 w-4" />
          </span>
        </SheetTrigger>
        <SheetContent side="left">
          <NavItemsMobile />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
