import React from "react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

function Wolfram({ params }: any) {
  unstable_setRequestLocale(params.local);
  const t = useTranslations("properties");
  return (
    <div className="bio">
      <h1 className="heading">{t("Wolfram.title")}</h1>
      <p>
        {t("Wolfram.text")} <br />{" "}
      </p>
      <br />
      <strong>{t("Wolfram.strong1")}</strong> {t("Wolfram.highMeltingPoint")}{" "}
      <br /> <br />
      <strong>{t("Wolfram.strong2")}</strong> {t("Wolfram.highDensity")} <br />{" "}
      <br />
      <strong>{t("Wolfram.strong3")}</strong> {t("Wolfram.chemicalResistance")}{" "}
      <br /> <br />
      <strong>{t("Wolfram.strong4")}</strong> {t("Wolfram.highTensileStrength")}{" "}
      <br /> <br />
      <strong>{t("Wolfram.strong5")}</strong>{" "}
      {t("Wolfram.electricalConductivity")} <br /> <br />
      <span>{t("Wolfram.lastText")}</span>
    </div>
  );
}

export default Wolfram;
