"use client";

import Link from "next/link";
import React from "react";
import navbar from "@/data/navbar.json";
import { useParams } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ChemistryItem from "./ChemistryItem";

const Navbar = () => {
  const { lang } = useParams();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbar.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.hasSubmenu ? (
              <NavigationMenuTrigger>
                {lang === "de" ? item.label.de : item.label.en}
                <NavigationMenuContent>
                  <ul className="flex justify-between gap-3 p-4 ">
                    {item.submenu?.map((item, index) => (
                      <li key={index}>
                        <ChemistryItem material={item} lang={lang} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuTrigger>
            ) : (
              <Link href={`/${lang}${item.href}`} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {lang === "de" ? item.label.de : item.label.en}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
