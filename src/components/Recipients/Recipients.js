import styled from "styled-components";

import { useTranslation } from "react-i18next";

const Container = styled.div``;

const Recipients = () => {
  const { t } = useTranslation();

  return (
    <Container className="recipients-container">
      <h2 className="page-heading">{t("recipients.title")}</h2>
    </Container>
  );
};

export default Recipients;
