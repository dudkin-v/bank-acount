import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";

import { Button } from "../../../../components/Button";
import { ExpiredDateInput } from "../ExpiredDateInput";
import { CardNumberInput } from "../CardNumberInput";

import PayPassSVG from "./PayPassSVG";
import { getCardType, cardTypes } from "../../../../utils/card";
import colors from "../../../../utils/colors";

const Container = styled.div`
  border-radius: 20px;
  width: 370px;
  height: 220px;
  box-shadow: 0 5px 15px 6px rgba(14, 60, 183, 0.2);
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
`;

const Card = ({ onCreateCard, setOpenCardCreator }) => {
  const isLoading = useSelector((rootStore) => rootStore.cards.loading);
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [expiredMonth, setExpiredMonth] = useState("");
  const [expiredYear, setExpiredYear] = useState("");
  const [resetFields, setResetFields] = useState(false);
  const [error, setError] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    onCreateCard({
      number: cardNumber,
      cardType,
      balance: 1000,
      expiredDate: {
        month: expiredMonth,
        year: expiredYear,
      },
    });
    setResetFields((prevResetFields) => !prevResetFields);
    setError(true);
    setTimeout(() => {
      setOpenCardCreator(false);
    }, 3000);
  };

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
      setError(true);
    } else {
      setError(false);
    }
  }, [cardNumber, expiredMonth, expiredYear, cardType]);

  useEffect(() => {
    if (!cardNumber.length) {
      setResetFields(false);
    }
  }, [cardNumber]);

  return (
    <Container className="card-container">
      <div className="card">
        <form onSubmit={onSubmit}>
          <div className="bank-name">
            <h2>Banking App</h2>
          </div>
          <div className="card-data">
            <PayPassSVG />
            <CardNumberInput
              setCardNumber={setCardNumber}
              onResetFields={resetFields}
            />
            <ExpiredDateInput
              setExpireMonth={setExpiredMonth}
              setExpireYear={setExpiredYear}
              onResetFields={resetFields}
            />
            <h2>USER NAME</h2>
            {cardType === cardTypes.VISA && <SiVisa />}
            {cardType === cardTypes.MASTERCARD && <FaCcMastercard />}
          </div>
          <Button
            type="submit"
            onClick={onSubmit}
            text="Create card"
            disabled={error}
            isLoading={isLoading}
          />
        </form>
      </div>
    </Container>
  );
};

Card.propTypes = {
  onCreateCard: PropTypes.func.isRequired,
  setOpenCardCreator: PropTypes.func.isRequired,
};

export default Card;
