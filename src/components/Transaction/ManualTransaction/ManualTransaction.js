import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { InputField } from "../../InputField";
import { Button } from "../../Button";

import { onSendTransaction } from "../../../store/transactions/thunk";
import colors from "../../../utils/colors";
import MyCardsSelect from "../MyCardsSelect/MyCardsSelect";

const Container = styled.div`
  .input {
    color: ${colors.royalBlue};
    max-height: 38px;
    margin-bottom: 15px;
    padding-left: 8px;
    transform: none;
  }
  .from,
  .to {
    p {
      font-size: 16px;
      color: ${colors.royalBlue};
    }
  }
  .price-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      width: 45%;
    }
  }
  .button-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .button {
      width: 45%;
      height: 37.5px;
      margin-top: 10px;
    }
    .button:last-child {
      background-color: ${colors.warning};
      color: white;
    }
  }
`;

const initialData = {
  senderCard: "",
  recipientCard: "",
  price: "",
};

const ManualTransaction = ({ onCloseTransaction }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector(
    (rootStore) => rootStore.transactions.transactionLoading
  );

  const [transactionData, setTransactionData] = useState(initialData);
  const [transactionComment, setTransactionComment] = useState("");

  const handleChangeSenderCard = ({ value }) => {
    setTransactionData((prevTransactionData) => ({
      ...prevTransactionData,
      senderCard: value,
    }));
  };
  const handleChangeRecipientCard = ({ target: { value } }) => {
    setTransactionData((prevTransactionData) => ({
      ...prevTransactionData,
      recipientCard: value,
    }));
  };
  const handleChangePrice = ({ target: { value } }) => {
    setTransactionData((prevTransactionData) => ({
      ...prevTransactionData,
      price: value,
    }));
  };
  const handleChangeComment = ({ target: { value } }) => {
    setTransactionComment(value);
  };

  const onSubmitTransaction = () => {
    dispatch(onSendTransaction(transactionData, onCloseTransaction));
  };

  return (
    <Container className="transaction">
      <div className="from">
        <p>{t("transaction.from")}</p>
        <MyCardsSelect handleChange={handleChangeSenderCard} />
      </div>
      <div className="to">
        <InputField
          label={t("transaction.to")}
          onChange={handleChangeRecipientCard}
          value={transactionData.recipientCard}
          name="cardNumber"
          placeholder={t("transaction.inputPlaceholder")}
          maxLength={19}
          type="tel"
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
        <InputField
          label={t("transaction.comment")}
          onChange={handleChangeComment}
          value={transactionComment}
          name="comment"
          placeholder={t("transaction.commentPlaceholder")}
          type="text"
        />
      </div>
      <div className="button-block">
        <Button
          text={t("buttons.send")}
          onClick={onSubmitTransaction}
          isLoading={loading}
        />
        <Button text={t("buttons.cancel")} onClick={onCloseTransaction} />
      </div>
    </Container>
  );
};

ManualTransaction.propTypes = {
  onCloseTransaction: PropTypes.func.isRequired,
};

export default ManualTransaction;
