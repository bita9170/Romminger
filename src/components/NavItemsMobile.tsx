import Link from "next/link";
import React from "react";
import navbar from "@/data/navbar.json";
import { useParams } from "next/navigation";
import ChemistryItem from "./ChemistryItem";
import CompanyItem from "./CompanyItem";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NavItemsMobile = () => {
  const { lang } = useParams();
  const renderSwitch = (item: any) => {
    switch (item.hasSubmenu.type) {
      case "materials":
        return (
          <ul className="grid md:flex justify-between gap-3 p-4 ">
            {item.submenu?.map((item: any, index: number) => (
              <li key={index}>
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
  return navbar.map((item, index) =>
    item.hasSubmenu.status ? (
      <Accordion type="single" collapsible>
        <AccordionItem value={`item-${index}`}>
          <AccordionTrigger>
            {lang === "de" ? item.label.de : item.label.en}
          </AccordionTrigger>
          <AccordionContent>{renderSwitch(item)}</AccordionContent>
        </AccordionItem>
      </Accordion>
    ) : (
      <Link href={`/${lang}${item.href}`} legacyBehavior passHref>
        {lang === "de" ? item.label.de : item.label.en}
      </Link>
    )
  );
};

export default NavItemsMobile;
