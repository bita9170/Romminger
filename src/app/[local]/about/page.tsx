import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const AboutPage = ({ params }: any) => {
  unstable_setRequestLocale(params.local);
  const t = useTranslations("about");
  return (
    <div className="bio">
      <h1 className="text-3xl font-bold my-4 mb-10">RR-Sondermetalle</h1>
      <p dangerouslySetInnerHTML={{ __html: t("AboutUs.mainText") }}></p>
      <div className=" my-2 font-bold">
        <Link
          href={`mailto: info@rr-sondermetalle.com`}
          className="email-link text-blue-900 hover:text-blue-700"
          style={{ fontWeight: "normal" }}
          target="_blank"
        >
          info@rr-sondermetalle.com
        </Link>
      </div>
      <p className="text-center font-bold ">
        {t("AboutUs.lastText")} <br />
        Hermann Hesse
      </p>
    </div>
  );
};

export default AboutPage;
