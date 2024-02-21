import React from "react";
import Link from "next/link";

const ChemistryItem = ({ material, lang }: { material: any; lang: any }) => {
  return (
    <Link href={`/${lang}${material.href}`}>
      <div className="materials">
        <div className="atomic-nw">
          <span>{material.atomicNumber}</span>
          <span>{material.atomicWeight}</span>
        </div>
        <div className="symbol">{material.symbol}</div>
        <div className="name">
          {material.name &&
            (lang === "de" ? material.name.de : material.name.en)}
        </div>
      </div>
    </Link>
  );
};

export default ChemistryItem;
