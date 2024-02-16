import React from "react";
import Link from "next/link";

const ChemistryItem = ({ material, lang }: { material: any; lang: any }) => {
  return (
    <Link href={`/${lang}${material.href}`}>
      <div
        className={`w-28 h-28 flex flex-col justify-between p-2 box-content bg-[${material.color}]`}
      >
        <div className="flex justify-between">
          <span>{material.atomicNumber}</span>
          <span>{material.atomicWeight}</span>
        </div>
        <div className="text-center">{material.symbol}</div>
        <div className="text-center">
          {lang === "de" ? material.name.de : material.name.en}
        </div>
      </div>
    </Link>
  );
};

export default ChemistryItem;
