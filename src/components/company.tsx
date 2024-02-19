import React from "react";
import Link from "next/link";

const CompanyItem = ({ company, lang }: { company: any; lang: any }) => {
  return (
    <Link href={`/${lang}${company.href}`}>
      <div className="materials">
        <div className="symbol">{company.symbol}</div>
        <div className="name">
          {company.title && (lang === "de" ? company.title.de : company.title.en)}
        </div>
      </div>
    </Link>
  );
};

export default CompanyItem;
