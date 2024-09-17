import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { RenderingCondition } from "../../components/RenderingCondition";
import { Button } from "../../components/Button";
import { CardCreator } from "./components/CardCreator";
import { Card } from "./components/Card";
import { Spinner } from "../../components/Spinner";
import { Error } from "../../components/Error";
import { Recipients } from "../../components/Recipients";
import { Transaction } from "../../components/Transaction";
import { CardHistory } from "../../components/CardHistory";

import { addCard } from "../../store/cards/thunk";
import colors from "../../utils/colors";
import shadows from "../../utils/shadows";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .cards-container {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    .cards {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90%;
      overflow-x: scroll;
      max-width: 400px;
      .error-message {
        max-width: 370px;
      }
      .no-cards-description {
        max-width: 370px;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        color: ${colors.gray};
        background-color: rgba(128, 128, 128, 0.1);
        padding: 15px 30px;
        border-radius: 15px;
        border: 1px solid ${colors.gray};
      }
    }
    .button {
      margin-top: 20px;
      width: 200px;
      height: 37.5px;
      justify-self: flex-end;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    box-shadow: ${shadows.gray};
    border-radius: 30px;
    width: 60%;
    height: 100%;
    padding: 0 40px 20px;
  }
`;

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((rootStore) => rootStore.cards.cards);
  const loading = useSelector((rootStore) => rootStore.cards.loading);
  const error = useSelector((rootStore) => rootStore.cards.error);
  const user = useSelector((rootStore) => rootStore.user.user);
  const { t } = useTranslation();
  const params = useParams();

  const [isOpenCardCreator, setOpenCardCreator] = useState(false);

  const onCreateCard = (cardData) => dispatch(addCard(cardData));
  const onOpenCardCreator = () =>
    setOpenCardCreator((prevIsOpen) => !prevIsOpen);

  const userName = user.firstName
    ? `${user.firstName[0]}. ${user.lastName}`
    : "";

  return (
    <Container className="page">
      <div className="cards-container">
        <h2 className="page-heading">{t("nav.links.cards")}</h2>
        <div className="cards">
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
                    id={card.id}
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
      </div>
      <div className="content">
        <Recipients />
        {params.transactionId && <Transaction />}
        {params.cardId && <CardHistory />}
      </div>
    </Container>
  );
};

export default Cards;
