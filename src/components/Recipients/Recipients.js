import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Recipient } from "./Recipient";
import { Manual } from "./Manual";

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

  return (
    <Container className="recipients-container">
      <h2 className="page-heading">{t("recipients.title")}</h2>
      <div className="recipients">
        <Manual />
        {recipients.map((recipient) => (
          <Recipient
            lastName={recipient.lastName}
            firstName={recipient.firstName}
            avatarImageUrl={recipient.imageUrl}
            key={recipient.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default Recipients;
