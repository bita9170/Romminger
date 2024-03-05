import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <div className="bio">
      <h1 className="text-3xl font-bold my-4">RR-Sondermetalle</h1>
      <span className="text-xl my-4 block">{t("AboutUs.headText")}</span>
      <p dangerouslySetInnerHTML={{ __html: t("AboutUs.mainText") }}></p>
      <div className=" my-2 font-bold">
        <Link
          href={`mailto: info@rr-sondermetalle.com`}
          className="email-link text-gray-600 hover:text-gray-900"
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
