import React from "react";
import { useTranslations } from "next-intl";

const Molybdenumpage = () => {
  const t = useTranslations("propertys");

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

{
  /* <p>
  <br />
  <strong>. Physikalische Eigenschaften:</strong> Molybdän ist ein
  silberweißes Metall, das eine hohe Dichte aufweist. Es ist sehr hart und
  spröde, jedoch gut formbar und schmiedbar. Der Schmelzpunkt von Molybdän
  liegt bei rund 2.620 Grad Celsius, was es zu einem Metall mit einer
  hohen Schmelztemperatur macht. <br />
  <br />
  <strong>. Chemische Eigenschaften:</strong> Molybdän ist beständig gegen
  die meisten chemischen Reagenzien. Es reagiert nicht mit Luft oder
  Sauerstoff, wenn es bei Raumtemperatur vorliegt. Bei hohen Temperaturen
  kann es jedoch mit Sauerstoff reagieren und bildet Molybdän(VI)-oxid
  (MoO3). Es reagiert auch mit einigen Säuren und Basen, wie zum Beispiel
  mit Salpetersäure oder Natronlauge. <br />
  <br />
  <strong>. Magnetische Eigenschaften:</strong> Molybdän ist ein wenig
  magnetisch. Das bedeutet, dass es eine geringe Magnetisierbarkeit hat,
  aber keine volle magnetische Eigenschaft aufweist. <br />
  <br />
  <strong>. Elektrische Leitfähigkeit:</strong> Molybdän ist ein guter
  elektrischer Leiter. Es hat eine relativ hohe elektrische Leitfähigkeit,
  die jedoch niedriger ist als bei Kupfer oder Aluminium.
  <br />
  <br />
  <strong>. Korrosionsbeständigkeit:</strong> Molybdän ist sehr beständig
  gegen Korrosion und Oxidation. Es ist in der Lage, bei hohen
  Temperaturen gegenüber reaktiven Umgebungen stabil zu bleiben. <br />
  <br />
  <strong>. Hohe Schmelztemperatur:</strong> Die hohe Schmelztemperatur
  von Molybdän macht es zu einem wichtigen Material für Anwendungen in
  Hochtemperaturumgebungen. Es wird oft in Hochtemperaturöfen, in der
  Luft- und Raumfahrtindustrie, bei der Herstellung von Leuchtmitteln und
  in anderen Anwendungen eingesetzt, in denen hohe Temperaturen auftreten
  können. <br />
  <br />
  <strong>. Katalytische Eigenschaften:</strong>
  Molybdän wird oft als Katalysator in verschiedenen chemischen Reaktionen
  eingesetzt. Es kann die Reaktionsgeschwindigkeit erhöhen und die
  gewünschten Produkte in bestimmten chemischen Reaktionen beeinflussen.
  Diese sind nur einige der wichtigen Eigenschaften von Molybdän. Das
  Metall hat eine breite Palette von Anwendungen in verschiedenen Branchen
  aufgrund seiner einzigartigen Eigenschaften.
</p>
<br /> */
}
