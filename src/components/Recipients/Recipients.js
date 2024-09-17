import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Recipient } from "./Recipient";
import { Manual } from "./Manual";

import { resetTransactionError } from "../../store/transactions/actions";
import routes from "../../utils/routes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .recipients {
    display: flex;
    overflow-y: scroll;
    padding-bottom: 15px;
  }
`;

const Recipients = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const recipients = useSelector(
    (rootStore) => rootStore.recipients.recipients
  );

  const onNewTransaction = (transactionId) => () => {
    navigate(`${routes.NEW_TRANSACTION}${transactionId}`);
    dispatch(resetTransactionError());
  };

  return (
    <Container className="recipients-container">
      <h2 className="page-heading">{t("recipients.title")}</h2>
      <div className="recipients">
        <Manual onClick={onNewTransaction("manual")} />
        {recipients.map((recipient) => (
          <Recipient
            lastName={recipient.info.lastName}
            firstName={recipient.info.firstName}
            key={recipient.info.id}
            onClick={onNewTransaction(recipient.info.id)}
          />
        ))}
      </div>
    </Container>
  );
};

export default Recipients;
