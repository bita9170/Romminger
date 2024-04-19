import React from "react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const TitaniumPage = ({ params }: any) => {
  unstable_setRequestLocale(params.local);
  const t = useTranslations("properties");
  return (
    <div className="bio">
      <h1 className="heading">{t("Titanium.title")}</h1>
      <p>
        {t("Titanium.text")} <br />
        <br />{" "}
      </p>
      <strong>{t("Titanium.strong1")}</strong>{" "}
      {t("Titanium.strengthAndHardness")} <br /> <br />
      <strong>{t("Titanium.strong2")}</strong>{" "}
      {t("Titanium.corrosionResistance")} <br /> <br />
      <strong>{t("Titanium.strong3")}</strong> {t("Titanium.lowDensity")} <br />{" "}
      <br />
      <strong>{t("Titanium.strong4")}</strong> {t("Titanium.biocompatibility")}{" "}
      <br /> <br />
      <strong>{t("Titanium.strong5")}</strong> {t("Titanium.heatResistance")}{" "}
      <br /> <br />
      <strong>{t("Titanium.strong6")}</strong> {t("Titanium.conductivity")}{" "}
      <br /> <br />
      <span>{t("Titanium.lastText")}</span>
    </div>
  );
};

export default TitaniumPage;
