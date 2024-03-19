import React from "react";
import { useTranslations } from "next-intl";

const Molybdenumpage = () => {
  const t = useTranslations("properties");

  return (
    <div className="bio">
      <h1 className="heading">{t("Molybdenum.title")}</h1>
      <p>{t("Molybdenum.text")}<br /> <br />
      <ul className="list-disc">
        <li><strong>{t("Molybdenum.strong1")}</strong> {t("Molybdenum.physicalProperties")}</li><br />
        <li><strong>{t("Molybdenum.strong2")}</strong> {t("Molybdenum.chemicalProperties")}</li>  <br />
        <li><strong>{t("Molybdenum.strong3")}</strong> {t("Molybdenum.magneticProperties")}</li>  <br />
        <li><strong>{t("Molybdenum.strong4")}</strong> {t("Molybdenum.electricalConductivity")}</li>  <br />
        <li><strong>{t("Molybdenum.strong5")}</strong> {t("Molybdenum.corrosionResistance")}</li>  <br />
        <li><strong>{t("Molybdenum.strong6")}</strong> {t("Molybdenum.highMeltingTemperature")}</li> <br />
        <li><strong>{t("Molybdenum.strong7")}</strong> {t("Molybdenum.catalyticProperties")}</li> 
      </ul>
      </p>
    </div>
  );
};

export default Molybdenumpage;
