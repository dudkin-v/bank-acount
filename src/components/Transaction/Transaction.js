import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Select } from "../Select";
import { InputField } from "../InputField";
import { Button } from "../Button";

import { onSendTransaction } from "../../store/transactions/thunk";
import { splitCardNumber } from "../../utils/card";
import colors from "../../utils/colors";

const Container = styled.div`
  width: 70%;
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

const Transaction = ({ isManual }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const myCards = useSelector((rootStore) => rootStore.cards.cards);
  const loading = useSelector(
    (rootStore) => rootStore.transactions.transactionLoading
  );

  const [isDisabledSendBtn, setDisabledSendBtn] = useState(true);
  const [senderCard, setSenderCard] = useState("");
  const [recipientCard, setRecipientCard] = useState("");
  const [price, setPrice] = useState("");
  const [transactionData, setTransactionData] = useState({});

  const options = myCards.map((card) => ({
    value: card.number,
    label: (
      <div className="select-label">
        <div>{splitCardNumber(card.number)}</div>
        <div>{`${card.balance}.00 UAH`}</div>
      </div>
    ),
  }));

  useEffect(() => {
    setTransactionData({
      senderCard,
      recipientCard: recipientCard.replace(/\s/g, ""),
      price: +price,
    });
  }, [senderCard, recipientCard, price]);

  useEffect(() => {
    if (transactionData.recipientCard && transactionData.senderCard) {
      if (transactionData.recipientCard.length < 16) {
        setDisabledSendBtn(true);
      } else {
        setDisabledSendBtn(false);
      }
    }
  }, [transactionData]);

  const handleChangeSenderCard = ({ value }) => setSenderCard(value);
  const handleChangeRecipientCard = ({ value }) => setRecipientCard(value);
  const manualHandleChangeRecipientCard = ({ target: { value } }) => {
    setRecipientCard(splitCardNumber(value.replace(/\s/g, "")));
  };
  const handleChangePrice = ({ target: { value } }) => setPrice(value);

  const handleSendTransaction = () => {
    dispatch(onSendTransaction(transactionData));
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
        <Button
          text={t("buttons.send")}
          onClick={handleSendTransaction}
          isLoading={loading}
          disabled={isDisabledSendBtn}
        />
      </div>
    </Container>
  );
};

Transaction.propTypes = {
  isManual: PropTypes.bool.isRequired,
};

export default Transaction;
