import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button";
import { CardCreator } from "./components/CardCreator";
import { Card } from "./components/Card";
import { addCard, getCards } from "../../store/cards/thunk";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .cards-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    overflow-x: scroll;
  }
  .add-new-card-btn {
    width: 200px;
    height: 37.5px;
  }
`;

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((rootStore) => rootStore.cards.cards);
  const { t } = useTranslation();

  const [openCardCreator, setOpenCardCreator] = useState(false);

  const onGetCards = () => dispatch(getCards());
  const onCreateCard = (cardData) => dispatch(addCard(cardData));

  useEffect(onGetCards, []);

  return (
    <Container className="page">
      <h2 className="page-heading">{t("nav.links.cards")}</h2>
      <div className="cards-container">
        {cards.length &&
          cards.map((card) => (
            <Card
              expireDate={card.expiredDate}
              number={card.number}
              key={card.id}
            />
          ))}
        {openCardCreator && (
          <CardCreator
            onCreateCard={onCreateCard}
            setOpenCardCreator={setOpenCardCreator}
          />
        )}
      </div>
      <Button
        className="add-new-card-btn"
        text={t("buttons.addNewCard")}
        onClick={() => setOpenCardCreator((prevState) => !prevState)}
      />
    </Container>
  );
};

export default Cards;
