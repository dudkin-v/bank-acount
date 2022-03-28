import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { IoClose } from "react-icons/io5";
import { CardLogo } from "../CardLogo";
import { Button } from "../../../../components/Button";
import { ExpiredDateInput } from "../ExpiredDateInput";
import { CardNumberInput } from "../CardNumberInput";

import PayPassSVG from "./PayPassSVG";
import { getCardType } from "../../../../utils/card";
import colors from "../../../../utils/colors";
import shadows from "../../../../utils/shadows";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  .close-btn {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 25px;
    height: 25px;
    color: ${colors.error};
    cursor: pointer;
    outline: none;
  }
  .card-creator {
    border-radius: 20px;
    width: 370px;
    min-height: 220px;
    box-shadow: ${shadows.royalBlue};
    ${colors.cardBackground};

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
          bottom: -70px;
          right: -10px;
          width: 200px;
          height: 37.5px;
        }
        div {
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
        .user-name {
          color: ${colors.ebb};
          padding: 0 10px;
          font-size: 20px;
          text-transform: uppercase;
        }
      }
    }
  }
`;

const CardCreator = ({ onCreateCard, handleCloseCardCreator, userName }) => {
  const { t } = useTranslation();
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [expiredMonth, setExpiredMonth] = useState("");
  const [expiredYear, setExpiredYear] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    onCreateCard({
      number: cardNumber,
      cardType,
      expiredDate: {
        month: expiredMonth,
        year: expiredYear,
      },
    });
    setIsDisabled(true);
    handleCloseCardCreator(false);
  };

  const onCloseCardCreator = () => handleCloseCardCreator(false);
  const onStopPropagation = (event) => event.stopPropagation();

  useEffect(() => {
    setCardType(getCardType(cardNumber));
  }, [cardNumber]);

  useEffect(() => {
    if (
      cardNumber.length < 16 ||
      expiredMonth.length < 2 ||
      expiredYear.length < 2 ||
      !cardType
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [cardNumber, expiredMonth, expiredYear, cardType]);

  return (
    <Container
      className="card-creator-container"
      role="button"
      aria-pressed="false"
      tabIndex={0}
      onClick={onCloseCardCreator}
    >
      <IoClose
        className="close-btn"
        role="button"
        aria-pressed="false"
        tabIndex={0}
        onClick={onCloseCardCreator}
      />
      <div
        className="card-creator"
        role="button"
        aria-pressed="false"
        tabIndex={0}
        onClick={onStopPropagation}
      >
        <div className="card">
          <form onSubmit={onSubmit}>
            <div className="bank-name">
              <h2>Banking App</h2>
            </div>
            <div className="card-data">
              <PayPassSVG className="pay-pass-mark" />
              <CardNumberInput onChangeCardNumber={setCardNumber} />
              <ExpiredDateInput
                onChangeExpiredMonth={setExpiredMonth}
                onChangeExpiredYear={setExpiredYear}
              />
              <h2 className="user-name">{userName}</h2>
              <CardLogo cardType={getCardType(cardNumber)} />
            </div>
            <Button
              type="submit"
              onClick={onSubmit}
              text={t("buttons.createCard")}
              disabled={isDisabled}
            />
          </form>
        </div>
      </div>
    </Container>
  );
};

CardCreator.propTypes = {
  onCreateCard: PropTypes.func.isRequired,
  handleCloseCardCreator: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default CardCreator;
