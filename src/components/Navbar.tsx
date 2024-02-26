"use client";

import React from "react";
import NavItems from "./NavItems";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItemsMobile from "./NavItemsMobile";

const Navbar = () => {
  return (
    <div className="main-menu">
      <NavItems />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="hamburger-menu">
            <HamburgerMenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <NavItemsMobile />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
