import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Select } from "../../Select";
import { splitCardNumber } from "../../../utils/card";
import colors from "../../../utils/colors";
import shadows from "../../../utils/shadows";

const Container = styled.div`
  .iwueWg .select .css-1s2u09g-control {
    border: none;
  }
  .select {
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 ${colors.royalBlue};
    .css-1s2u09g-control,
    .css-4ljt47-MenuList {
      border: none;
    }
    .css-4ljt47-MenuList {
      box-shadow: ${shadows.royalBlue};
    }
    margin-top: 5px;
    margin-bottom: 15px;
    .select-label {
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
      }
      .balance:before {
        content: "||";
        color: ${colors.ebb};
      }
    }
  }
`;

const MyCardsSelect = ({ handleChange, errorMessage }) => {
  const { t } = useTranslation();
  const myCards = useSelector((rootStore) => rootStore.cards.cards);

  const getSelectLabel = (card) => (
    <div className="select-label">
      <div>{splitCardNumber(card.number)}</div>
      <div className="balance">{`${card.balance}.00 UAH`}</div>
    </div>
  );

  const selectOptions = myCards.map((card) => ({
    value: card.number,
    label: getSelectLabel(card),
  }));

  return (
    <Container>
      <Select
        placeholder={t("transaction.placeholder")}
        onChange={handleChange}
        options={selectOptions}
        errorMessage={errorMessage}
      />
    </Container>
  );
};
MyCardsSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

MyCardsSelect.defaultProps = {
  errorMessage: undefined,
};

export default MyCardsSelect;
