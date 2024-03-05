import React from "react";
import { useTranslations } from "next-intl";

const Molybdenumpage = () => {
  const t = useTranslations("properties");

  return (
    <div className="bio">
      <h1 className="heading">{t("Molybdenum.title")}</h1>
      <p>{t("Molybdenum.text")}<br /> <br />
      <strong>{t("Molybdenum.strong1")}</strong> {t("Molybdenum.physicalProperties")} <br /> <br />
      <strong>{t("Molybdenum.strong2")}</strong> {t("Molybdenum.chemicalProperties")} <br /> <br />
      <strong>{t("Molybdenum.strong3")}</strong> {t("Molybdenum.magneticProperties")} <br /> <br />
      <strong>{t("Molybdenum.strong4")}</strong> {t("Molybdenum.electricalConductivity")} <br /> <br />
      <strong>{t("Molybdenum.strong5")}</strong> {t("Molybdenum.corrosionResistance")} <br /> <br />
      <strong>{t("Molybdenum.strong6")}</strong> {t("Molybdenum.meltingPoint")} <br /> <br />
      <strong>{t("Molybdenum.strong7")}</strong> {t("Molybdenum.catalyticProperties")} <br />
      </p>
    </div>
  );
};

export default Molybdenumpage;
