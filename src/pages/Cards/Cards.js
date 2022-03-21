import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button";
import { CardCreator } from "./components/CardCreator";
import { Card } from "./components/Card";
import { addCard, getCards } from "../../store/cards/thunk";
import colors from "../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 80%;
    overflow-x: scroll;
    .card-container {
      border-radius: 20px;
      width: 370px;
      height: 220px;
      margin: 0 20px 20px 0;
      background: ${colors.coralTree};
      background: linear-gradient(
        149deg,
        rgba(162, 88, 107, 1) 0%,
        rgba(40, 47, 91, 1) 50%,
        rgba(162, 88, 107, 1) 100%
      );
      .card {
        width: 100%;
        height: 100%;
        padding: 10px;
        form {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          button {
            position: absolute;
            bottom: -60px;
            right: -10px;
            width: 200px;
            height: 37.5px;
          }
          div {
            position: relative;
            width: 100%;
          }
          .bank-name {
            display: flex;
            justify-content: flex-start;
            h2 {
              color: ${colors.ebb};
              padding: 0 10px;
            }
          }
          .card-data {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .curd-number {
              display: flex;
              align-items: center;
              justify-content: space-around;
              padding: 0 20px;
              p {
                font-size: 18px;
                font-weight: bold;
                color: white;
                padding: 5px;
                border: none;
                outline: none;
                width: 55px;
                background: none;
              }
            }
            .expire-date {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              .expire-date-description {
                display: flex;
                flex-wrap: wrap;
                width: 20px;
                color: ${colors.ebb};
                font-size: 6px;
                font-weight: bold;
                line-height: 7px;
              }
              .expire-date-value {
                font-size: 16px;
                text-align: center;
                font-weight: bold;
                color: white;
                padding: 5px;
                border: none;
                outline: none;
                width: 30px;
                background: none;
              }
              span {
                font-size: 16px;
                font-weight: bold;
                color: ${colors.ebb};
              }
            }
            svg {
              width: 50px;
              height: auto;
              color: ${colors.ebb};
              position: absolute;
              bottom: 5px;
              right: 10px;
            }
            .pay-pass-mark {
              width: 45px;
              height: auto;
              color: ${colors.ebb};
              position: absolute;
              bottom: 100px;
              right: 10px;
            }
            h2 {
              color: ${colors.ebb};
              padding: 0 10px;
              font-size: 20px;
              text-transform: uppercase;
            }
          }
        }
      }
    }
    .card-creator {
      margin: 0 20px 60px 0;
      box-shadow: 0 5px 15px 6px rgba(14, 60, 183, 0.2);
    }
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
