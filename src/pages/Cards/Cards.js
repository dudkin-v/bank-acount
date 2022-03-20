import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button";
import { Card } from "./components/Card";

import { addCard, getCards } from "../../store/cards/thunk";

const Container = styled.div`
  .cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 600px;
    border: 2px solid black;
    border-radius: 25px;
  }

  button {
    width: 200px;
    height: 37.5px;
    margin: 5px;
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

  console.log("cards", cards);

  return (
    <Container className="page">
      <h2 className="page-heading">{t("nav.links.cards")}</h2>
      <div className="cards-container">
        <h2>Your cards:</h2>
        {openCardCreator && (
          <Card
            onCreateCard={onCreateCard}
            setOpenCardCreator={setOpenCardCreator}
          />
        )}
      </div>
      <Button
        text="Add new card"
        onClick={() => setOpenCardCreator((prevState) => !prevState)}
      />
    </Container>
  );
};

export default Cards;
