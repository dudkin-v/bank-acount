import styled from "styled-components";
import PropTypes from "prop-types";
import ListItem from "./ListItem/ListItem";

const List = styled.ul`
  max-height: 370px;
  overflow-y: scroll;
`;

const HistoryList = ({ history }) => (
  <List className="history-list">
    {history.map((transaction) => (
      <ListItem
        key={transaction.id}
        date={transaction.date}
        price={transaction.price}
      />
    ))}
  </List>
);

HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default HistoryList;
