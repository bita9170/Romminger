import React from "react";
import { useTranslations } from "next-intl";

const TantalumPage = () => {
  const t = useTranslations("properties");
  return (
    <div className="bio">
      <h1 className="heading">{t("Tantalum.title")}</h1>
      <p>{t("Tantalum.text")} <br /> </p>
        <br />
        <strong>{t("Tantalum.strong1")}</strong> {t("Tantalum.physicalProperties")} <br /> <br />
        <strong>{t("Tantalum.strong2")}</strong> {t("Tantalum.chemicalProperties")} <br /> <br />
        <strong>{t("Tantalum.strong3")}</strong> {t("Tantalum.densityAndWeight")} <br /> <br />
        <strong>{t("Tantalum.strong4")}</strong> {t("Tantalum.use")} <br /> <br />
        <strong>{t("Tantalum.strong5")}</strong> {t("Tantalum.availabilityAndExtraction")} <br /> <br /> 
    </div>
  );
}

export default TantalumPage;
