import styled from "styled-components";

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

const users = [
  { firstName: "Denis", lastName: "Inauri" },
  {
    firstName: "Vladislav",
    lastName: "Dudkin",
    imageUrl:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
  },
  { firstName: "Zulfia", lastName: "Khamaieva" },
  { firstName: "Maria", lastName: "Leschinskaya" },
  { firstName: "Mark", lastName: "Dudkin" },
];

const Recipients = () => {
  const { t } = useTranslation();

  return (
    <Container className="recipients-container">
      <h2 className="page-heading">{t("recipients.title")}</h2>
      <div className="recipients">
        <Manual />
        {users.map((user) => (
          <Recipient
            lastName={user.lastName}
            firstName={user.firstName}
            avatarImageUrl={user.imageUrl}
            key={user.firstName}
          />
        ))}
      </div>
    </Container>
  );
};

export default Recipients;
