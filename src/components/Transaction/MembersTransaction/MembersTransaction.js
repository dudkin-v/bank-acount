import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import MyCardsSelect from "../MyCardsSelect/MyCardsSelect";
import { Select } from "../../Select";
import { InputField } from "../../InputField";
import { Button } from "../../Button";

import colors from "../../../utils/colors";
import { transactionValidationSchema } from "../../../utils/validation";
import { onSendTransaction } from "../../../store/transactions/thunk";
import { splitCardNumber } from "../../../utils/card";

const Container = styled.form`
  .iwueWg .select .css-1s2u09g-control {
    border: none;
  }
  .select {
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 ${colors.royalBlue};
    .css-1s2u09g-control,
    .css-4ljt47-MenuList {
      border: none;
    }
    .css-4ljt47-MenuList {
      box-shadow: 0 1px 3px 0 ${colors.royalBlue};
    }
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
        color: ${colors.ebb};
      }
    }
  }
  .input {
    color: ${colors.royalBlue};
    max-height: 38px;
    margin-bottom: 15px;
    padding-left: 8px;
    transform: none;
  }
  .from,
  .to {
    .label {
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
    .button:first-child {
      background-color: white;
      color: ${colors.royalBlue};
      border: 2px solid ${colors.royalBlue};
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
  const recipients = useSelector(
    (rootStore) => rootStore.recipients.recipients
  );
  const loading = useSelector(
    (rootStore) => rootStore.transactions.transactionLoading
  );

  const formik = useFormik({
    initialValues: initialData,
    validationSchema: transactionValidationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch(onSendTransaction(values, onCloseTransaction));
    },
  });

  const [transactionComment, setTransactionComment] = useState("");

  useEffect(() => {
    if (formik.values.price) {
      formik.setFieldValue("price", +formik.values.price);
    }
  }, [formik.values.price]);

  const handleChangeComment = ({ target: { value } }) => {
    setTransactionComment(value);
  };
  const handleChangeSenderCard = ({ value }) => {
    formik.setFieldValue("senderCard", value);
  };
  const handleChangeRecipientCard = ({ value }) => {
    formik.setFieldValue("recipientCard", value);
  };

  const recipientCards = recipients
    .find((user) => user.info.id === recipientId)
    .cards.map((card) => ({
      value: card.number,
      label: splitCardNumber(card.number),
    }));

  return (
    <Container className="transaction" onSubmit={formik.handleSubmit}>
      <div className="from">
        <p className="label">{t("transaction.from")}</p>
        <MyCardsSelect
          handleChange={handleChangeSenderCard}
          errorMessage={t(formik.errors.senderCard)}
        />
      </div>
      <div className="to">
        <p className="label">{t("transaction.to")}</p>
        <Select
          placeholder={t("transaction.placeholder")}
          onChange={handleChangeRecipientCard}
          options={recipientCards}
          errorMessage={t(formik.errors.recipientCard)}
        />
      </div>
      <div className="price-block">
        <InputField
          type="number"
          name="price"
          label={t("transaction.price")}
          placeholder={t("transaction.pricePlaceholder")}
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.price}
          errorMessage={t(formik.errors.price)}
        />
        <InputField
          type="text"
          name="comment"
          label={t("transaction.comment")}
          placeholder={t("transaction.commentPlaceholder")}
          value={transactionComment}
          onChange={handleChangeComment}
        />
      </div>
      <div className="button-block">
        <Button text={t("buttons.cancel")} onClick={onCloseTransaction} />
        <Button
          type="submit"
          text={t("buttons.send")}
          isLoading={loading}
          disabled={!formik.isValid}
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
