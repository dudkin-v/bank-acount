import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ManualTransaction from "./ManualTransaction/ManualTransaction";
import MembersTransaction from "./MembersTransaction/MembersTransaction";
import { Error } from "../Error";

import { resetTransactionError } from "../../store/transactions/actions";
import routes from "../../utils/routes";

const Container = styled.div`
  position: relative;
  padding: 20px 0;
  .error-message:last-child {
    margin-top: 20px;
  }
`;

const Transaction = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useSelector(
    (rootStore) => rootStore.transactions.transactionError
  );
  const navigate = useNavigate();
  const params = useParams();
  const [errorMessage, setErrorMessage] = useState();

  const onCloseTransaction = () => {
    navigate(routes.CARDS, { replace: true });
    dispatch(resetTransactionError());
  };

  useEffect(() => {
    if (error) {
      if (error.includes("404")) {
        setErrorMessage(t("transaction.errors.404"));
      }
      if (error.includes("402")) {
        setErrorMessage(t("transaction.errors.402"));
      }
      if (error.includes("Network Error")) {
        setErrorMessage(t("transaction.errors.internet"));
      }
    }
  }, [error]);

  return (
    <Container isOpen={params.id}>
      {params.id &&
        (params.id === "manual" ? (
          <ManualTransaction onCloseTransaction={onCloseTransaction} />
        ) : (
          <MembersTransaction
            onCloseTransaction={onCloseTransaction}
            recipientId={params.id}
          />
        ))}
      {error && <Error errorMessage={errorMessage} />}
    </Container>
  );
};

export default Transaction;
