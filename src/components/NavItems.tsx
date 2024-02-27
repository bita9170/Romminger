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
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const NavItems = () => {
  const { local } = useParams();
  const navigationMenuTriggerStyle = cva(
    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50"
  );

  const renderSwitch = (item: any) => {
    switch (item.hasSubmenu.type) {
      case "materials":
        return (
          <ul className="flex justify-between gap-3 p-4">
            {item.submenu?.map((item: any, index: number) => (
              <li key={index}>
                <ChemistryItem material={item} lang={local} />
              </li>
            ))}
          </ul>
        );
      case "company":
        return (
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {item.submenu?.map((item: any, index: number) => (
              <li key={index}>
                <CompanyItem company={item} lang={local} />
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
              <NavigationMenuTrigger className="text-xl">
                {local === "de" ? item.label.de : item.label.en}
                <NavigationMenuContent>
                  {renderSwitch(item)}
                </NavigationMenuContent>
              </NavigationMenuTrigger>
            ) : (
              <Link href={`/${local}${item.href}`} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {local === "de" ? item.label.de : item.label.en}
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
