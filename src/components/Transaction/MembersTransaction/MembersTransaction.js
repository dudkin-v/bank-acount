import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Select } from "../../Select";
import { InputField } from "../../InputField";
import { Button } from "../../Button";
import { onSendTransaction } from "../../../store/transactions/thunk";
import colors from "../../../utils/colors";
import { splitCardNumber } from "../../../utils/card";

const Container = styled.div`
  .input {
    color: ${colors.rhino};
    max-height: 38px;
    margin-bottom: 15px;
    padding-left: 8px;
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
      div {
        display: flex;
        align-items: center;
      }
      .balance:before {
        content: "||";
        color: #dadada;
      }
    }
  }
  .price-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      width: 40%;
    }
    .button {
      width: 200px;
      height: 37.5px;
      margin-top: 10px;
    }
  }
`;

const initialData = {
  senderCard: "",
  recipientCard: "",
  price: "",
};

const MembersTransaction = ({ recipientId, onCloseTransaction }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const myCards = useSelector((rootStore) => rootStore.cards.cards);
  const recipients = useSelector(
    (rootStore) => rootStore.recipients.recipients
  );
  const loading = useSelector(
    (rootStore) => rootStore.transactions.transactionLoading
  );

  const [transactionData, setTransactionData] = useState(initialData);

  const handleChangeSenderCard = ({ value }) => {
    setTransactionData((prevTransactionData) => ({
      ...prevTransactionData,
      senderCard: value,
    }));
  };
  const handleChangeRecipientCard = ({ value }) => {
    setTransactionData((prevTransactionData) => ({
      ...prevTransactionData,
      recipientCard: value,
    }));
  };
  const handleChangePrice = ({ target: { value } }) => {
    setTransactionData((prevTransactionData) => ({
      ...prevTransactionData,
      price: +value,
    }));
  };

  const onSubmitTransaction = () => {
    dispatch(onSendTransaction(transactionData, onCloseTransaction));
  };

  const options = myCards.map((card) => ({
    value: card.number,
    label: (
      <div className="select-label">
        <div>{splitCardNumber(card.number)}</div>
        <div className="balance">{`${card.balance}.00 UAH`}</div>
      </div>
    ),
  }));
  const recipient = recipients.find((user) => user.info.id === recipientId);
  const recipientCards = recipient.cards.map((card) => ({
    value: card.number,
    label: card.number,
  }));

  return (
    <Container className="transaction">
      <div className="from">
        <p>{t("transaction.from")}</p>
        <Select
          placeholder={t("transaction.placeholder")}
          onChange={handleChangeSenderCard}
          options={options}
        />
      </div>
      <div className="to">
        <p>{t("transaction.to")}</p>
        <Select
          placeholder={t("transaction.placeholder")}
          onChange={handleChangeRecipientCard}
          options={recipientCards}
        />
      </div>
      <div className="price-block">
        <InputField
          label={t("transaction.price")}
          onChange={handleChangePrice}
          value={transactionData.price}
          name="price"
          placeholder={t("transaction.pricePlaceholder")}
          type="tel"
        />
        <Button
          text={t("buttons.send")}
          onClick={onSubmitTransaction}
          isLoading={loading}
        />
      </div>
    </Container>
  );
};

MembersTransaction.propTypes = {
  recipientId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onCloseTransaction: PropTypes.func.isRequired,
};

MembersTransaction.defaultProps = {
  recipientId: undefined,
};

export default MembersTransaction;
