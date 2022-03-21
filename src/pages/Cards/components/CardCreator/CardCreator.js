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

const CardCreator = ({ onCreateCard, setOpenCardCreator }) => {
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
    <div className="card-container card-creator">
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
    </div>
  );
};

CardCreator.propTypes = {
  onCreateCard: PropTypes.func.isRequired,
  setOpenCardCreator: PropTypes.func.isRequired,
};

export default CardCreator;
