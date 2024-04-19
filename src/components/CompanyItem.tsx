import Link from "next/link";
import React from "react";
// import { unstable_setRequestLocale } from "next-intl/server";

const CompanyItem = ({ company, lang }: { company: any; lang: any }) => {
  // unstable_setRequestLocale(lang);

  return (
    <div className="company capitalize">
      <div className="title">
        <span dangerouslySetInnerHTML={{ __html: company.icon }}></span>
        {company.title && (lang === "de" ? company.title.de : company.title.en)}
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: company.description }}
        ></p>
        {company.email && (
          <Link
            href={`mailto:${company.email}`}
            className="email-link lowercase"
            style={{ fontWeight: "normal" }}
            target="_blank"
          >
            {company.email}
          </Link>
        )}
      </div>
    </div>
  );
};

export default CompanyItem;
