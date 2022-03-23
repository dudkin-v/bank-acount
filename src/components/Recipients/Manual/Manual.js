import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { GiCardExchange } from "react-icons/gi";
import colors from "../../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.ebb};
  padding: 20px;
  margin-right: 15px;
  border-radius: 20px;
  max-width: 90px;
  min-width: 90px;
  height: 120px;
  &:hover {
    border: 1px solid ${colors.turquoise};
    cursor: pointer;
    p {
      color: ${colors.rhino};
    }
  }
  p {
    font-size: 12px;
    color: ${colors.gray};
    padding-top: 10px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    svg {
      font-size: 25px;
      color: ${colors.rhino};
    }
  }
`;

const Manual = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div>
        <GiCardExchange />
      </div>
      <p>{t("recipients.manualTransaction")}</p>
    </Container>
  );
};

export default Manual;
