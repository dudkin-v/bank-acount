import styled from "styled-components";
import { useEffect, useState } from "react";

import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";

import { ExpiredDateInput } from "../ExpiredDateInput";
import { CardNumberInput } from "../CardNumberInput";
import PayPassSVG from "./PayPassSVG";
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
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

const Card = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [expiredMonth, setExpiredMonth] = useState("");
  const [expiredYear, setExpiredYear] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    return {
      number: cardNumber,
      type: cardType,
      expiredDate: {
        month: expiredMonth,
        year: expiredYear,
      },
    };
  };

  useEffect(() => {
    if (cardNumber.startsWith("4")) {
      setCardType("visa");
    } else if (cardNumber.startsWith("5")) {
      setCardType("mastercard");
    } else {
      setCardType("");
    }
  }, [cardNumber, cardType]);

  return (
    <Container className="card-container">
      <div className="card">
        <form onSubmit={onSubmit}>
          <div className="bank-name">
            <h2>Banking App</h2>
          </div>
          <div className="card-data">
            <PayPassSVG />
            <CardNumberInput setCardNumber={setCardNumber} />
            <ExpiredDateInput
              setExpireMonth={setExpiredMonth}
              setExpireYear={setExpiredYear}
            />
            <h2>USER NAME</h2>
            {cardType === "visa" && <SiVisa />}
            {cardType === "mastercard" && <FaCcMastercard />}
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Card;
