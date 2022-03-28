import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { GiCardExchange } from "react-icons/gi";
import colors from "../../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;
  margin-right: 15px;
  &:hover {
    transition: 0.4s;
    p {
      color: ${colors.royalBlue};
    }
    div {
      border: 2px solid ${colors.royalBlue};
    }
  }
  p {
    font-size: 12px;
    color: ${colors.outerSpace};
    padding-top: 10px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid ${colors.outerSpace};
    svg {
      font-size: 30px;
      color: ${colors.outerSpace};
    }
  }
`;

const Manual = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Container
      role="button"
      aria-pressed={false}
      tabIndex={0}
      onClick={onClick}
    >
      <div>
        <GiCardExchange />
      </div>
      <p>{t("recipients.manualTransaction")}</p>
    </Container>
  );
};

Manual.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Manual;
