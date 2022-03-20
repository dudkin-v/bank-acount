import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Card } from "./components/Card";

const Cards = () => {
  const cards = useSelector((rootStore) => rootStore.cards.cards);
  const { t } = useTranslation();
  console.log(cards);

  return (
    <div className="page">
      <h2 className="page-heading">{t("nav.links.cards")}</h2>
      <Card />
    </div>
  );
};

export default Cards;
