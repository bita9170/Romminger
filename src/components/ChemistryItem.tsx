import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
// import { unstable_setRequestLocale } from "next-intl/server";

const ChemistryItem = ({ material, lang }: { material: any; lang: any }) => {
  // unstable_setRequestLocale(lang);
  const t = useTranslations("materials-item");
  return (
    <Link href={`/${lang}${material.href}`}>
      <div className="materials">
        <div className="atomic-nw">
          <span>{material.atomicNumber}</span>
          <span>{material.atomicWeight}</span>
        </div>
        <div className="symbol">{material.symbol}</div>
        <div className="name">{material.name && t(material.name)}</div>
      </div>
    </Link>
  );
};

export default ChemistryItem;
