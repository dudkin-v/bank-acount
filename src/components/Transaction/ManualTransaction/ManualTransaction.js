import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { InputField } from "../../InputField";
import { Button } from "../../Button";
import MyCardsSelect from "../MyCardsSelect/MyCardsSelect";

import { resetTransactionError } from "../../../store/transactions/actions";
import { onSendTransaction } from "../../../store/transactions/thunk";
import colors from "../../../utils/colors";
import { transactionValidationSchema } from "../../../utils/validation";

const Container = styled.form`
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

const ManualTransaction = ({ onCloseTransaction }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector(
    (rootStore) => rootStore.transactions.transactionLoading
  );

  const formik = useFormik({
    initialValues: initialData,
    validationSchema: transactionValidationSchema,
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

  useEffect(() => {
    dispatch(resetTransactionError());
  }, [formik.values.recipientCard]);

  const handleChangeComment = ({ target: { value } }) => {
    setTransactionComment(value);
  };
  const handleChangeSenderCard = ({ value }) => {
    formik.setFieldValue("senderCard", value);
  };

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
        <InputField
          type="number"
          label={t("transaction.to")}
          name="recipientCard"
          placeholder={t("transaction.inputPlaceholder")}
          value={formik.values.recipientCard}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.recipientCard}
          errorMessage={t(formik.errors.recipientCard)}
        />
      </div>
      <div className="price-block">
        <InputField
          type="number"
          label={t("transaction.price")}
          name="price"
          placeholder={t("transaction.pricePlaceholder")}
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.price}
          errorMessage={t(formik.errors.price)}
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

ManualTransaction.propTypes = {
  onCloseTransaction: PropTypes.func.isRequired,
};

export default ManualTransaction;
