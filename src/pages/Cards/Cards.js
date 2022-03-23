import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { RenderingCondition } from "../../components/RenderingCondition";
import { Button } from "../../components/Button";
import { CardCreator } from "./components/CardCreator";
import { Card } from "./components/Card";
import { Spinner } from "../../components/Spinner";
import { Error } from "../../components/Error";

import { addCard, getCards } from "../../store/cards/thunk";
import colors from "../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .cards-container {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (!props.cards || props.error) && "center"};
    width: 380px;
    height: 80%;
    overflow-x: scroll;
    .no-cards-description {
      width: 250px;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      color: ${colors.gray};
    }
    .error-message {
      width: 250px;
    }
  }
  .button {
    width: 200px;
    height: 37.5px;
  }
`;

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((rootStore) => rootStore.cards.cards);
  const loading = useSelector((rootStore) => rootStore.cards.loading);
  const error = useSelector((rootStore) => rootStore.cards.error);
  const user = useSelector((rootStore) => rootStore.user.user);
  const { t } = useTranslation();

  const [isOpenCardCreator, setOpenCardCreator] = useState(false);

  const onGetCards = () => dispatch(getCards());
  const onCreateCard = (cardData) => dispatch(addCard(cardData));
  const onOpenCardCreator = () =>
    setOpenCardCreator((prevIsOpen) => !prevIsOpen);

  const userName = user.firstName
    ? `${user.firstName[0]}. ${user.lastName}`
    : "";

  useEffect(onGetCards, []);

  return (
    <Container className="page" cards={cards.length} error={error}>
      <h2 className="page-heading">{t("nav.links.cards")}</h2>
      <div className="cards-container">
        <RenderingCondition error={error} isLoading={loading}>
          <RenderingCondition.Pending>
            <Spinner />
          </RenderingCondition.Pending>

          <RenderingCondition.Fulfilled>
            {cards.length ? (
              cards.map((card) => (
                <Card
                  userName={userName}
                  expiredDate={card.expiredDate}
                  number={card.number}
                  cardType={card.cardType}
                  key={card.id}
                />
              ))
            ) : (
              <p className="no-cards-description">{t("cards.noCards")}</p>
            )}
          </RenderingCondition.Fulfilled>

          <RenderingCondition.Rejected>
            <Error errorMessage={error} />
          </RenderingCondition.Rejected>
        </RenderingCondition>
        {isOpenCardCreator && (
          <CardCreator
            userName={userName}
            onCreateCard={onCreateCard}
            handleCloseCardCreator={setOpenCardCreator}
          />
        )}
      </div>
      <Button text={t("buttons.addNewCard")} onClick={onOpenCardCreator} />
    </Container>
  );
};

export default Cards;
