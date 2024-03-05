import React from "react";
import { useTranslations } from "next-intl";

function Wolfram() {
  const t = useTranslations("properties");
  return (
    <div className="bio">
    <h1 className="heading">{t("Wolfram.title")}</h1>
    <p>{t("Wolfram.text")} <br />
      <br />
      <strong>{t("Wolfram.strong1")}</strong> {t("Wolfram.highMeltingPoint")} <br /> <br />
      <strong>{t("Wolfram.strong2")}</strong> {t("Wolfram.highDensity")} <br /> <br />
      <strong>{t("Wolfram.strong3")}</strong> {t("Wolfram.chemicalResistance")} <br /> <br />
      <strong>{t("Wolfram.strong4")}</strong> {t("Wolfram.highTensileStrength")} <br /> <br />
      <strong>{t("Wolfram.strong5")}</strong> {t("Wolfram.electricalConductivity")} <br /> <br />
      <span>{t("Wolfram.lastText")}</span>
      </p>
  </div>
  );
}

export default Wolfram;
