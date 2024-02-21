import Link from "next/link";
import React from "react";

const CompanyItem = ({ company, lang }: { company: any; lang: any }) => {
  console.log(company.email);
  return (
    <div className="company capitalize">
      <div className="title">
        <span
          dangerouslySetInnerHTML={{ __html: company.icon }}
          className="mr-2 "
        ></span>
        {company.title && (lang === "de" ? company.title.de : company.title.en)}
        <p className="description">{company.description}</p>
        {company.email && (
          <Link
            href={`mailto:${company.email}`}
            className="email-link"
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
