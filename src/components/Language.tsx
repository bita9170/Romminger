"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { useParams } from "next/navigation";
import flagSrc from "@/images/united-kingdom.png";
import Germany from "@/images/German.png";
import Image from "next/image";

const Language = () => {
  const { lang } = useParams();

  const navigationMenuTriggerStyle = cva("flex justify-between items-center");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {lang === "en" ? (
          <NavigationMenuItem>
            <Link href="/de" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Image src={Germany} alt="" loading="lazy" width={20} />
                <span className="ml-2 p-0 text-white">DE</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <Link href="/en" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Image src={flagSrc} alt="" loading="lazy" width={20} />
                <span className="ml-2 text-white">EN</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Language;
