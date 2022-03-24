import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
import { Recipient } from "./Recipient";
import { Manual } from "./Manual";
import { Transaction } from "../Transaction";
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
  const recipients = useSelector(
    (rootStore) => rootStore.recipients.recipients
  );

  const onNewTransaction = (id) => () => {
    navigate(`${routes.NEW_TRANSACTION}${id}`);
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
      <Transaction />
    </Container>
  );
};

export default Recipients;
