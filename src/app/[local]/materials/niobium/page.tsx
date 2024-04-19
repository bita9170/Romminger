import React from "react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

function NiobiumPage({ params }: any) {
  unstable_setRequestLocale(params.local);
  const t = useTranslations("properties");
  return (
    <div className="bio">
      <h1 className="heading">{t("Niobium.title")}</h1>
      <p>
        {t("Niobium.text")} <br />{" "}
      </p>
      <br />
      <strong>{t("Niobium.strong1")}</strong> {t("Niobium.strengthAndHardness")}{" "}
      <br /> <br />
      <strong>{t("Niobium.strong2")}</strong> {t("Niobium.corrosionResistance")}{" "}
      <br /> <br />
      <strong>{t("Niobium.strong3")}</strong>{" "}
      {t("Niobium.temperatureResistance")} <br /> <br />
      <strong>{t("Niobium.strong4")}</strong> {t("Niobium.superconductivity")}{" "}
      <br /> <br />
      <strong>{t("Niobium.strong5")}</strong> {t("Niobium.biocompatibility")}{" "}
      <br /> <br />
      <span>{t("Niobium.lastText")}</span>
    </div>
  );
}

export default NiobiumPage;
