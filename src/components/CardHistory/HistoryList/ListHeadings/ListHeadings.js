import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import colors from "../../../../utils/colors";

const List = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.royalBlue};
  margin-bottom: 10px;
  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: ${colors.royalBlue};
    }
    svg {
      font-size: 16px;
      margin-left: 5px;
      color: ${colors.outerSpace};
    }
  }
  span:first-child {
    padding-left: 15px;
  }
  span:last-child {
    padding-right: 15px;
  }
`;

const ListHeadings = ({ handleSort, isDescending, sortValue }) => {
  const { t } = useTranslation();
  return (
    <List className="history-list-heading">
      <span
        role="button"
        aria-pressed={false}
        tabIndex={0}
        onClick={handleSort("date")}
      >
        {t("cardHistory.date")}
        {sortValue === "date" &&
          (isDescending ? <HiSortDescending /> : <HiSortAscending />)}
      </span>
      <span
        role="button"
        aria-pressed={false}
        tabIndex={0}
        onClick={handleSort("id")}
      >
        {t("cardHistory.recipient")}
        {sortValue === "id" &&
          (isDescending ? <HiSortDescending /> : <HiSortAscending />)}
      </span>
      <span
        role="button"
        aria-pressed={false}
        tabIndex={0}
        onClick={handleSort("price")}
      >
        {t("cardHistory.price")}
        {sortValue === "price" &&
          (isDescending ? <HiSortDescending /> : <HiSortAscending />)}
      </span>
    </List>
  );
};

ListHeadings.propTypes = {
  handleSort: PropTypes.func.isRequired,
  isDescending: PropTypes.bool.isRequired,
  sortValue: PropTypes.string.isRequired,
};

export default ListHeadings;
