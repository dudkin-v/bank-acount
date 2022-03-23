import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Select } from "../Select";
import { InputField } from "../InputField";

import { splitCardNumber } from "../../utils/card";
import colors from "../../utils/colors";
import { Button } from "../Button";

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  .input {
    color: ${colors.rhino};
  }

  .from,
  .to {
    p {
      font-size: 16px;
      color: ${colors.rhino};
    }
  }
  .select {
    background-color: #dadada;
    margin-top: 5px;
    margin-bottom: 15px;
    .select-label {
      display: flex;
      justify-content: space-between;
    }
  }
  .button {
    width: 200px;
    height: 37.5px;
    margin-top: 5px;
  }
  .price-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      width: 40%;
    }
  }
`;

const Transaction = ({ isManual, handleCloseTransaction }) => {
  const { t } = useTranslation();
  const myCards = useSelector((rootStore) => rootStore.cards.cards);

  const [senderCard, setSenderCard] = useState("");
  const [recipientCard, setRecipientCard] = useState("");
  const [price, setPrice] = useState("");

  const options = myCards.map((card) => ({
    value: card.number,
    label: (
      <div className="select-label">
        <div>{splitCardNumber(card.number)}</div>
        <div>{`${card.balance}.00 UAH`}</div>
      </div>
    ),
  }));

  const handleChangeSenderCard = ({ value }) => setSenderCard(value);
  const handleChangeRecipientCard = ({ value }) => setRecipientCard(value);
  const manualHandleChangeRecipientCard = ({ target: { value } }) => {
    setRecipientCard(splitCardNumber(value.replace(/\s/g, "")));
  };
  const handleChangePrice = ({ target: { value } }) => setPrice(value);

  const onSendTransaction = () => {
    console.log({ senderCard, recipientCard, price: +price });
    handleCloseTransaction(false);
  };

  return (
    <Container>
      <div className="from">
        <p>{t("transaction.from")}</p>
        <Select
          placeholder={t("transaction.placeholder")}
          onChange={handleChangeSenderCard}
          options={options}
        />
      </div>
      {isManual ? (
        <div className="to">
          <InputField
            label={t("transaction.to")}
            onChange={manualHandleChangeRecipientCard}
            value={recipientCard}
            name="cardNumber"
            placeholder={t("transaction.inputPlaceholder")}
            maxLength={19}
            type="tel"
          />
        </div>
      ) : (
        <div className="to">
          <p>{t("transaction.to")}</p>
          <Select
            placeholder={t("transaction.placeholder")}
            onChange={handleChangeRecipientCard}
            options={options}
          />
        </div>
      )}
      <div className="price-block">
        <InputField
          label={t("transaction.price")}
          onChange={handleChangePrice}
          value={price}
          name="price"
          placeholder={t("transaction.pricePlaceholder")}
          type="tel"
        />
        <Button text={t("buttons.send")} onClick={onSendTransaction} />
      </div>
    </Container>
  );
};

Transaction.propTypes = {
  isManual: PropTypes.bool.isRequired,
  handleCloseTransaction: PropTypes.func.isRequired,
};

export default Transaction;
