import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Recipient } from "./Recipient";
import { Manual } from "./Manual";
import { Transaction } from "../Transaction";

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
  const { t } = useTranslation();
  const recipients = useSelector(
    (rootStore) => rootStore.recipients.recipients
  );
  const [isOpenTransaction, setOpenTransaction] = useState(false);
  const [isManual, setManual] = useState(false);

  const onNewTransaction = () => {
    setManual(true);
    setOpenTransaction(!isOpenTransaction);
  };

  return (
    <Container className="recipients-container">
      <h2 className="page-heading">{t("recipients.title")}</h2>
      <div className="recipients">
        <Manual onClick={onNewTransaction} />
        {recipients.map((recipient) => (
          <Recipient
            lastName={recipient.info.lastName}
            firstName={recipient.info.firstName}
            key={recipient.info.id}
          />
        ))}
      </div>
      {isOpenTransaction && <Transaction isManual={isManual} />}
    </Container>
  );
};

export default Recipients;
