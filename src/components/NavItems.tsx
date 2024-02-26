"use client";

import Link from "next/link";
import React from "react";
import navbar from "@/data/navbar.json";
import { useParams } from "next/navigation";
import ChemistryItem from "./ChemistryItem";
import CompanyItem from "./CompanyItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavItems = () => {
  const { lang } = useParams();
  const renderSwitch = (item: any) => {
    switch (item.hasSubmenu.type) {
      case "materials":
        return (
          <ul className="flex justify-between gap-3 p-4 ">
            {item.submenu?.map((item: any, index: number) => (
              <li key={index}>
                <CompanyItem company={item} lang={lang} />
                <ChemistryItem material={item} lang={lang} />
              </li>
            ))}
          </ul>
        );
      case "company":
        return (
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {item.submenu?.map((item: any, index: number) => (
              <li key={index}>
                <CompanyItem company={item} lang={lang} />
              </li>
            ))}
          </ul>
        );
    }
  };
  return (
    <NavigationMenu>
      <NavigationMenuList className="grid md:flex">
        {navbar.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.hasSubmenu.status ? (
              <NavigationMenuTrigger>
                {lang === "de" ? item.label.de : item.label.en}
                <NavigationMenuContent>
                  {renderSwitch(item)}
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

export default NavItems;
