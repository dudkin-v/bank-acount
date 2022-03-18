import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { getCards } from "../../store/cards/thunk";
import { Button } from "../../components/Button";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((rootStore) => rootStore.cards.cards);
  const { t } = useTranslation();
  console.log(cards);

  const onGetCards = () => dispatch(getCards());

  return (
    <div className="page">
      <h2 className="page-heading">{t("nav.links.cards")}</h2>
      <Button text="Get cards" onClick={onGetCards} />
    </div>
  );
};

export default Cards;
