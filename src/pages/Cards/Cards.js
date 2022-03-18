import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h2 className="page-heading">{t("nav.links.cards")}</h2>
    </div>
  );
};

export default Cards;
