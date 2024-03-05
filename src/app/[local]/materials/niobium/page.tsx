import React from 'react'
import { useTranslations } from "next-intl";


function NiobiumPage() {
  const t = useTranslations("propertys");
  return (
    <div className="bio">
    <h1 className="heading">{t("Niobium.title")}</h1>
    <p>{t("Niobium.text")} <br />
      <br />
      <strong>{t("Niobium.strong1")}</strong> {t("Niobium.strengthAndHardness")} <br /> <br />
      <strong>{t("Niobium.strong2")}</strong> {t("Niobium.corrosionResistance")} <br /> <br />
      <strong>{t("Niobium.strong3")}</strong> {t("Niobium.temperatureResistance")} <br /> <br />
      <strong>{t("Niobium.strong4")}</strong> {t("Niobium.superconductivity")} <br /> <br />
      <strong>{t("Niobium.strong5")}</strong> {t("Niobium.biocompatibility")} <br /> <br />
      <span>{t("Niobium.lastText")}</span>
      </p>
    
  </div>
  
  )
}

export default NiobiumPage