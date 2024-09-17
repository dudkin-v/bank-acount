import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ManualTransaction from "./ManualTransaction/ManualTransaction";
import MembersTransaction from "./MembersTransaction/MembersTransaction";
import { Error } from "../Error";

import { resetTransactionError } from "../../store/transactions/actions";
import routes from "../../utils/routes";

const Container = styled.div`
  padding: 20px 0;
  .error-message:last-child {
    margin-top: 40px;
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

  const onCloseTransaction = () => {
    navigate(routes.CARDS, { replace: true });
    dispatch(resetTransactionError());
  };

  const getErrorMessage = (e) => {
    if (e.includes("404")) {
      return t("transaction.errors.404");
    }
    if (e.includes("402")) {
      return t("transaction.errors.402");
    }
    return e;
  };

  return (
    <Container>
      {params.transactionId &&
        (params.transactionId === "manual" ? (
          <ManualTransaction onCloseTransaction={onCloseTransaction} />
        ) : (
          <MembersTransaction
            onCloseTransaction={onCloseTransaction}
            recipientId={params.transactionId}
          />
        ))}
      {params.transactionId && error && (
        <Error errorMessage={getErrorMessage(error)} />
      )}
    </Container>
  );
};

export default Transaction;
